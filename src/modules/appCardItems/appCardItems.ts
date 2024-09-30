import { Request, Response, NextFunction, response } from "express";
import { ErrorHandler } from "@errors";
import dotenv from "dotenv";
import { miroBuilder } from "@config";
dotenv.config();

export class AppCardItemsController {
  static async CreateAppCardItem(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      let miro = miroBuilder(token);

      let { board_id, ...body } = req.body

      let response = await miro.post(`/boards/${board_id}/app_cards`, body);

      res.status(200).send({
        success: true,
        message: "App card item created successfully",
        data: response.data,
      });
    } catch (error: any) {
      next(
        new ErrorHandler(error.message, error.response?.status || error.status)
      );
    }
  }

  static async GetAppCardItemById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      let miro = miroBuilder(token);

      let { board_id, item_id } = req.query

      let response = await miro.get(`/boards/${board_id}/app_cards/${item_id}`);

      res.status(200).send({
        success: true,
        message: "App card item retrieved by id successfully",
        data: response.data,
      });
    } catch (error: any) {
      next(
        new ErrorHandler(error.message, error.response?.status || error.status)
      );
    }
  }

  static async UpdateAppCardItem(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      let miro = miroBuilder(token);

      let { board_id, item_id, ...body } = req.body

      let response = await miro.patch(`/boards/${board_id}/app_cards/${item_id}`, body);

      res.status(200).send({
        success: true,
        message: "App card item updated successfully",
        data: response.data,
      });
    } catch (error: any) {
      next(
        new ErrorHandler(error.message, error.response?.status || error.status)
      );
    }
  }


  static async DeleteAppCardItem(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      let miro = miroBuilder(token);

      let { board_id, item_id } = req.body

      let response = await miro.delete(`/boards/${board_id}/app_cards/${item_id}`);

      res.status(200).send({
        success: true,
        message: "App card item deleted successfully",
        data: response.data,
      });
    } catch (error: any) {
      next(
        new ErrorHandler(error.message, error.response?.status || error.status)
      );
    }
  }
}
