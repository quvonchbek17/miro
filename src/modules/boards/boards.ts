import { Request, Response, NextFunction, response } from "express";
import { ErrorHandler } from "@errors";
import dotenv from "dotenv";
import { miroBuilder } from "@config";
import axios from "axios";
import * as fs from "fs";
import path from "path";
dotenv.config();

export class BoardsController {
  static async GetAllBoards(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      let miro = miroBuilder(token)

      let response = await miro.get("/boards", {params: req.query})

      res.status(200).send({
        success: true,
        message: "Boards retrieved successfully",
        data: response.data,
      });
    } catch (error: any) {
      next(new ErrorHandler(error.message, error.response?.status || error.status));
    }
  }

  static async GetAllBoardMembers(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      let miro = miroBuilder(token)

      let { board_id, ...query } = req.query

      let response = await miro.get(`/boards/${board_id}/members`, {params: query})

      res.status(200).send({
        success: true,
        message: "Board members retrieved successfully",
        data: response.data,
      });
    } catch (error: any) {
      next(new ErrorHandler(error.message, error.response?.status || error.status));
    }
  }

  static async GetBoardById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      let miro = miroBuilder(token)

      let { board_id } = req.query

      let response = await miro.get(`/boards/${board_id}`)

      res.status(200).send({
        success: true,
        message: "Board retrieved successfully",
        data: response.data,
      });
    } catch (error: any) {
      next(new ErrorHandler(error.message, error.response?.status || error.status));
    }
  }


  static async GetBoardMemberById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      let miro = miroBuilder(token)

      let { board_id, member_id } = req.query

      let response = await miro.get(`/boards/${board_id}/members/${member_id}`)

      res.status(200).send({
        success: true,
        message: "Board member retrieved successfully",
        data: response.data,
      });
    } catch (error: any) {
      next(new ErrorHandler(error.message, error.response?.status || error.status));
    }
  }


  static async CreateBoard(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      let miro = miroBuilder(token)

      let response = await miro.post(`/boards`, req.body)

      res.status(201).send({
        success: true,
        message: "Board created successfully",
        data: response.data,
      });
    } catch (error: any) {
      next(new ErrorHandler(error.message, error.response?.status || error.status));
    }
  }

  static async ShareBoard(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      let miro = miroBuilder(token)

      let { board_id, ...body } = req.body

      let response = await miro.post(`/boards/${board_id}/members`, body)

      res.status(201).send({
        success: true,
        message: "Board shared successfully",
        data: response.data,
      });
    } catch (error: any) {
      next(new ErrorHandler(error.message, error.response?.status || error.status));
    }
  }

  static async CopyBoard(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      let miro = miroBuilder(token)

      let { copy_from, ...body } = req.body

      let response = await miro.put(`/boards?copy_from=${copy_from}`, body)

      res.status(201).send({
        success: true,
        message: "Board copied successfully",
        data: response.data,
      });
    } catch (error: any) {
      next(new ErrorHandler(error.message, error.response?.status || error.status));
    }
  }

  static async UpdateBoard(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      let miro = miroBuilder(token)

      let { board_id, ...body } = req.body

      let response = await miro.patch(`/boards/${board_id}`, body)

      res.status(200).send({
        success: true,
        message: "Board updated successfully",
        data: response.data,
      });
    } catch (error: any) {
      next(new ErrorHandler(error.message, error.response?.status || error.status));
    }
  }

  static async UpdateBoardMember(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      let miro = miroBuilder(token)

      let { board_id, member_id, role } = req.body

      let response = await miro.patch(`/boards/${board_id}/members/${member_id}`, {role})

      res.status(200).send({
        success: true,
        message: "Board member updated successfully",
        data: response.data,
      });
    } catch (error: any) {
      next(new ErrorHandler(error.message, error.response?.status || error.status));
    }
  }

  static async DeleteBoard(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      let miro = miroBuilder(token)

      let { board_id } = req.body

      let response = await miro.delete(`/boards/${board_id}`)

      res.status(200).send({
        success: true,
        message: "Board deleted successfully",
        data: response.data,
      });
    } catch (error: any) {
      next(new ErrorHandler(error.message, error.response?.status || error.status));
    }
  }


  static async RemoveBoardMember(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      let miro = miroBuilder(token)

      let { board_id, member_id } = req.body

      let response = await miro.delete(`/boards/${board_id}/members/${member_id}`)

      res.status(200).send({
        success: true,
        message: "Board member removed successfully",
        data: response.data,
      });
    } catch (error: any) {
      next(new ErrorHandler(error.message, error.response?.status || error.status));
    }
  }

}
