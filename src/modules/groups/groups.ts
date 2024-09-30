import { Request, Response, NextFunction, response } from "express";
import { ErrorHandler } from "@errors";
import dotenv from "dotenv";
import { miroBuilder } from "@config";
dotenv.config();

export class GroupsController {
  static async GetAllGroups(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      let miro = miroBuilder(token);

      let { board_id, limit, cursor } = req.query;

      let response = await miro.get(`/boards/${board_id}/groups`, {
        params: {
          limit,
          cursor,
        },
      });

      res.status(201).send({
        success: true,
        message: "Groups retrieved successfully",
        data: response.data,
      });
    } catch (error: any) {
      next(
        new ErrorHandler(error.message, error.response?.status || error.status)
      );
    }
  }

  static async GetGroupById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      let miro = miroBuilder(token);

      let { board_id, group_id } = req.query;

      let response = await miro.get(`/boards/${board_id}/groups/${group_id}`);

      res.status(201).send({
        success: true,
        message: "Group by id retrieved successfully",
        data: response.data,
      });
    } catch (error: any) {
      next(
        new ErrorHandler(error.message, error.response?.status || error.status)
      );
    }
  }

  static async GetGroupItems(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      let miro = miroBuilder(token);

      let { board_id, group_id, limit, cursor } = req.query;

      let response = await miro.get(`/boards/${board_id}/groups/items`, {
        params: {
          group_item_id: group_id,
          limit,
          cursor,
        },
      });

      res.status(201).send({
        success: true,
        message: "Group items retrieved successfully",
        data: response.data,
      });
    } catch (error: any) {
      next(
        new ErrorHandler(error.message, error.response?.status || error.status)
      );
    }
  }

  static async CreateGroup(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      let miro = miroBuilder(token);

      let { board_id, ...body } = req.body;

      let response = await miro.post(`/boards/${board_id}/groups`, body);

      res.status(201).send({
        success: true,
        message: "Group created successfully",
        data: response.data,
      });
    } catch (error: any) {
      next(
        new ErrorHandler(error.message, error.response?.status || error.status)
      );
    }
  }

  static async UpdateGroup(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      let miro = miroBuilder(token);

      let { board_id, group_id, ...body } = req.body;

      let response = await miro.put(
        `/boards/${board_id}/groups/${group_id}`,
        body
      );

      res.status(201).send({
        success: true,
        message: "Group updated successfully",
        data: response.data,
      });
    } catch (error: any) {
      next(
        new ErrorHandler(error.message, error.response?.status || error.status)
      );
    }
  }

  static async DeleteItemFromGroup(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      let miro = miroBuilder(token);

      let { board_id, group_id, ...body } = req.body;

      let response = await miro.delete(
        `/boards/${board_id}/groups/${group_id}
`,
    {
        params: {
            ...body
        }
    }
      );

      res.status(201).send({
        success: true,
        message: "Group Item deleted successfully",
        data: response.data,
      });
    } catch (error: any) {
      next(
        new ErrorHandler(error.message, error.response?.status || error.status)
      );
    }
  }

  static async DeleteGroupWithItems(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      let miro = miroBuilder(token);

      let { board_id, group_id, delete_items } = req.body;

      let response = await miro.delete(
        `/boards/${board_id}/groups/${group_id}`, {
            params: {
                delete_items
            }
        }
      );

      res.status(201).send({
        success: true,
        message: "Group deleted successfully",
        data: response.data,
      });
    } catch (error: any) {
      next(
        new ErrorHandler(error.message, error.response?.status || error.status)
      );
    }
  }
}
