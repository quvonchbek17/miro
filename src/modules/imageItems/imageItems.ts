import { Request, Response, NextFunction, response } from "express";
import { ErrorHandler } from "@errors";
import dotenv from "dotenv";
import { miroBuilder } from "@config";
import axios from "axios";
import path from "path";
import * as fs from "fs"
dotenv.config();

export class ImageItemsController {
  static async CreateImageItemUsingUrl(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      let miro = miroBuilder(token);

      let { board_id, ...body } = req.body;

      let response = await miro.post(`/boards/${board_id}/images`, body);

      res.status(200).send({
        success: true,
        message: "Image Item created successfully",
        data: response.data,
      });
    } catch (error: any) {
      next(
        new ErrorHandler(error.message, error.response?.status || error.status)
      );
    }
  }

  // static async CreateImageItemUsingFile(
  //   req: Request,
  //   res: Response,
  //   next: NextFunction
  // ): Promise<void> {
  //   try {
  //     const token = req.headers.access_token as string;
  //     const { board_id, data } = req.body;

  //     const formData = new FormData();
  //     let file = req.file
  //     let filePath = ""
  //     if(file){
  //       filePath = path.join(process.cwd(), "uploads", file.fieldname)
  //       formData.append("data", JSON.parse(data));
  //       formData.append("resource", fs.createReadStream(filePath), {
  //         filename: file.originalname,
  //         contentType: file.mimetype,
  //       });
  //     }

  //     const response = await axios.post(
  //       `https://api.miro.com/v2/boards/${board_id}/images`,
  //       formData,
  //       {
  //         headers: {
  //           'Content-Type': 'application/json',
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );

  //     res.status(200).send({
  //       success: true,
  //       message: "Image Item created successfully",
  //       data: response.data,
  //     });
  //   } catch (error: any) {
  //     next(new ErrorHandler(error.message, error.response?.status || error.status));
  //   }
  // }

  static async GetImageItemById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      let miro = miroBuilder(token);

      let { board_id, item_id } = req.query;

      let response = await miro.get(`/boards/${board_id}/images/${item_id}`);

      res.status(200).send({
        success: true,
        message: "Image Item by id retrieved successfully",
        data: response.data,
      });
    } catch (error: any) {
      next(
        new ErrorHandler(error.message, error.response?.status || error.status)
      );
    }
  }

  static async UpdateImageItemUsingUrl(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      let miro = miroBuilder(token);

      let { board_id, item_id, ...body } = req.body;

      let response = await miro.patch(`/boards/${board_id}/images/${item_id}`, body);

      res.status(200).send({
        success: true,
        message: "Image Item updated successfully",
        data: response.data,
      });
    } catch (error: any) {
      next(
        new ErrorHandler(error.message, error.response?.status || error.status)
      );
    }
  }

  static async DeleteImageItem(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      let miro = miroBuilder(token);

      let { board_id, item_id } = req.body;

      let response = await miro.delete(`/boards/${board_id}/images/${item_id}`);

      res.status(200).send({
        success: true,
        message: "Image Item deleted successfully",
        data: response.data,
      });
    } catch (error: any) {
      next(
        new ErrorHandler(error.message, error.response?.status || error.status)
      );
    }
  }

}
