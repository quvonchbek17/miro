import { Request, Response, NextFunction, response } from "express";
import { ErrorHandler } from "@errors";
import dotenv from "dotenv";
import { miroBuilder } from "@config";
import axios from "axios";
import * as fs from "fs";
import path from "path";
dotenv.config();

export class ItemsController {
  static async GetItemsOnBoard(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      let miro = miroBuilder(token)

      let { board_id } = req.query

      let response = await miro.get(`/boards/${board_id}/items`)

      res.status(200).send({
        success: true,
        message: "Board items retrieved successfully",
        data: response.data,
      });
    } catch (error: any) {
      next(new ErrorHandler(error.message, error.response?.status || error.status));
    }
  }

  static async GetItemOnBoardById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      let miro = miroBuilder(token)

      let { board_id, item_id } = req.query

      let response = await miro.get(`/boards/${board_id}/items/${item_id}`)

      res.status(200).send({
        success: true,
        message: "Board item by id retrieved successfully",
        data: response.data,
      });
    } catch (error: any) {
      next(new ErrorHandler(error.message, error.response?.status || error.status));
    }
  }

  static async UpdateItemOnBoard(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      let miro = miroBuilder(token)

      let { board_id, item_id, ...body } = req.body

      let response = await miro.patch(`/boards/${board_id}/items/${item_id}`, body)

      res.status(200).send({
        success: true,
        message: "Board item by updated successfully",
        data: response.data,
      });
    } catch (error: any) {
      next(new ErrorHandler(error.message, error.response?.status || error.status));
    }
  }


  static async DeleteItemOnBoard(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      let miro = miroBuilder(token)

      let { board_id, item_id } = req.body

      let response = await miro.delete(`/boards/${board_id}/items/${item_id}`)

      res.status(200).send({
        success: true,
        message: "Board item by id retrieved successfully",
        data: response.data,
      });
    } catch (error: any) {
      next(new ErrorHandler(error.message, error.response?.status || error.status));
    }
  }

}
