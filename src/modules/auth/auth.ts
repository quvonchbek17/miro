import { Request, Response, NextFunction } from "express";
import { ErrorHandler } from "@errors";
import axios from "axios";
import * as qs from "qs";
import crypto from "crypto";
import dotenv from "dotenv";
dotenv.config();

function generateCodeChallenge() {
  const codeVerifier = crypto.randomBytes(32).toString("hex");
  const hash = crypto
    .createHash("sha256")
    .update(codeVerifier)
    .digest("base64url");
  return { codeVerifier, codeChallenge: hash };
}

export class AuthController {
  static codeVerifier: string = "";

  static async getAuthUrl(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      let client_id = process.env.MIRO_CLIENT_ID;
      let redirect_uri = process.env.MIRO_REDIRECT_URI as string;

      const authUrl = `https://miro.com/oauth/authorize?response_type=code&client_id=${client_id}&redirect_uri=${encodeURIComponent(redirect_uri)}`;;

      res.redirect(authUrl);
    } catch (error: any) {
      next(new ErrorHandler(error.message, error.status));
    }
  }

  static async Login(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { code } = req.query;

      let result = await axios.post('https://api.miro.com/v1/oauth/token',
        qs.stringify({
          grant_type: 'authorization_code',
          client_id: process.env.MIRO_CLIENT_ID,
          client_secret: process.env.MIRO_CLIENT_SECRET,
          code,
          redirect_uri: process.env.MIRO_REDIRECT_URI
        })
      )
      res.send(result.data);
    } catch (error: any) {
      next(new ErrorHandler(error.message, error.status));
    }
  }

  static async RefreshAccessToken(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { refresh_token } = req.body;
      let result = await axios.post(
        "https://api.miro.com/v1/oauth/token",
        qs.stringify({
          grant_type: "refresh_token",
          client_id: process.env.MIRO_CLIENT_ID,
          client_secret: process.env.MIRO_CLIENT_SECRET,
          refresh_token,
        })
      );

      res.status(200).json({
        success: true,
        message: "Access token muvaffaqiyatli yangilandi",
        data: result.data,
      });
    } catch (error: any) {
      next(
        new ErrorHandler(
          error.response?.data?.message || error.message,
          error.response?.status || 500
        )
      );
    }
  }
}
