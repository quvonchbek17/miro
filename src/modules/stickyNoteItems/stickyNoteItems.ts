import { Request, Response, NextFunction, response } from "express";
import { ErrorHandler } from "@errors";
import dotenv from "dotenv";
import { miroBuilder } from "@config";
dotenv.config();

export class StickyNoteItemsController {
  static async CreateStickyNoteItem(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      let miro = miroBuilder(token);

      let { board_id, ...body } = req.body;

      let response = await miro.post(`/boards/${board_id}/sticky_notes`, body);

      res.status(200).send({
        success: true,
        message: "Sticky Note Item created successfully",
        data: response.data,
      });
    } catch (error: any) {
      next(
        new ErrorHandler(error.message, error.response?.status || error.status)
      );
    }
  }

  static async GetStickyNoteItemById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      let miro = miroBuilder(token);

      let { board_id, item_id } = req.query;

      let response = await miro.get(`/boards/${board_id}/sticky_notes/${item_id}`);

      res.status(200).send({
        success: true,
        message: "Sticky Note Item retrieved successfully",
        data: response.data,
      });
    } catch (error: any) {
      next(
        new ErrorHandler(error.message, error.response?.status || error.status)
      );
    }
  }

  static async UpdateStickyNoteItem(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      let miro = miroBuilder(token);

      let { board_id, item_id, ...body } = req.body;

      let response = await miro.patch(`/boards/${board_id}/sticky_notes/${item_id}`, body);

      res.status(200).send({
        success: true,
        message: "Sticky Note Item updated successfully",
        data: response.data,
      });
    } catch (error: any) {
      next(
        new ErrorHandler(error.message, error.response?.status || error.status)
      );
    }
  }

  static async DeleteStickyNoteItem(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      let miro = miroBuilder(token);

      let { board_id, item_id } = req.body;

      let response = await miro.delete(`/boards/${board_id}/sticky_notes/${item_id}`);

      res.status(200).send({
        success: true,
        message: "Sticky Note Item deleted successfully",
        data: response.data,
      });
    } catch (error: any) {
      next(
        new ErrorHandler(error.message, error.response?.status || error.status)
      );
    }
  }
}
