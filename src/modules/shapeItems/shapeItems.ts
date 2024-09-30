import { Request, Response, NextFunction, response } from "express";
import { ErrorHandler } from "@errors";
import dotenv from "dotenv";
import { miroBuilder } from "@config";
dotenv.config();

export class ShapeItemsController {
  static async CreateShapeItem(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      let miro = miroBuilder(token);

      let { board_id, ...body } = req.body;

      let response = await miro.post(`/boards/${board_id}/shapes`, body);

      res.status(200).send({
        success: true,
        message: "Shape Item created successfully",
        data: response.data,
      });
    } catch (error: any) {
      next(
        new ErrorHandler(error.message, error.response?.status || error.status)
      );
    }
  }

  static async GetShapeItemById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      let miro = miroBuilder(token);

      let { board_id, item_id } = req.query;

      let response = await miro.get(`/boards/${board_id}/shapes/${item_id}`);

      res.status(200).send({
        success: true,
        message: "Shape Item retrieved successfully",
        data: response.data,
      });
    } catch (error: any) {
      next(
        new ErrorHandler(error.message, error.response?.status || error.status)
      );
    }
  }

  static async UpdateShapeItem(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      let miro = miroBuilder(token);

      let { board_id, item_id, ...body } = req.body;

      let response = await miro.patch(`/boards/${board_id}/shapes/${item_id}`, body);

      res.status(200).send({
        success: true,
        message: "Shape Item updated successfully",
        data: response.data,
      });
    } catch (error: any) {
      next(
        new ErrorHandler(error.message, error.response?.status || error.status)
      );
    }
  }


  static async DeleteShapeItem(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      let miro = miroBuilder(token);

      let { board_id, item_id } = req.body;

      let response = await miro.delete(`/boards/${board_id}/shapes/${item_id}`);

      res.status(200).send({
        success: true,
        message: "Shape Item deleted successfully",
        data: response.data,
      });
    } catch (error: any) {
      next(
        new ErrorHandler(error.message, error.response?.status || error.status)
      );
    }
  }

}
