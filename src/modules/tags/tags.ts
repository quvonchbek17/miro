import { Request, Response, NextFunction, response } from "express";
import { ErrorHandler } from "@errors";
import dotenv from "dotenv";
import { miroBuilder } from "@config";
dotenv.config();

export class TagsController {
  static async GetBoardTags(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      let miro = miroBuilder(token);

      let { board_id, ...params } = req.query;

      let response = await miro.get(`/boards/${board_id}/tags`, {
        params,
      });

      res.status(200).send({
        success: true,
        message: "Board Tags retrieved successfully",
        data: response.data,
      });
    } catch (error: any) {
      next(
        new ErrorHandler(error.message, error.response?.status || error.status)
      );
    }
  }

  static async GetItemsByTag(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      let miro = miroBuilder(token);

      let { board_id, ...params } = req.query;

      let response = await miro.get(`/boards/${board_id}/items`, {params});

      res.status(200).send({
        success: true,
        message: "Items retrieved successfully",
        data: response.data,
      });
    } catch (error: any) {
      next(
        new ErrorHandler(error.message, error.response?.status || error.status)
      );
    }
  }

  static async GetTagssFromItem(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      let miro = miroBuilder(token);

      let { board_id, item_id } = req.query;

      let response = await miro.get(`/boards/${board_id}/items/${item_id}/tags`);

      res.status(200).send({
        success: true,
        message: "Items retrieved successfully",
        data: response.data,
      });
    } catch (error: any) {
      next(
        new ErrorHandler(error.message, error.response?.status || error.status)
      );
    }
  }

  static async GetTagById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      let miro = miroBuilder(token);

      let { board_id, tag_id } = req.query;

      let response = await miro.get(`/boards/${board_id}/tags/${tag_id}`);

      res.status(200).send({
        success: true,
        message: "Tag retrieved successfully",
        data: response.data,
      });
    } catch (error: any) {
      next(
        new ErrorHandler(error.message, error.response?.status || error.status)
      );
    }
  }

  static async CreateTag(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      let miro = miroBuilder(token);

      let { board_id, ...body } = req.body;

      let response = await miro.post(`/boards/${board_id}/tags`, body);

      res.status(200).send({
        success: true,
        message: "Tag created successfully",
        data: response.data,
      });
    } catch (error: any) {
      next(
        new ErrorHandler(error.message, error.response?.status || error.status)
      );
    }
  }

  static async AttachTagToItem(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      let miro = miroBuilder(token);

      let { board_id, item_id, tag_id } = req.body;

      let response = await miro.post(`/boards/${board_id}/items/${item_id}?tag_id=${tag_id}`);

      res.status(200).send({
        success: true,
        message: "Attach Tag To Item successfully",
        data: response.data,
      });
    } catch (error: any) {
      next(
        new ErrorHandler(error.message, error.response?.status || error.status)
      );
    }
  }

  static async UpdateTag(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      let miro = miroBuilder(token);

      let { board_id, tag_id, ...body } = req.body;

      let response = await miro.patch(`/boards/${board_id}/tags/${tag_id}`, body);

      res.status(200).send({
        success: true,
        message: "Tag updated successfully",
        data: response.data,
      });
    } catch (error: any) {
      next(
        new ErrorHandler(error.message, error.response?.status || error.status)
      );
    }
  }


  static async DeleteTagFromItem(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      let miro = miroBuilder(token);

      let { board_id, item_id, tag_id } = req.body;

      let response = await miro.delete(`/boards/${board_id}/items/${item_id}`, {
        params: {
          tag_id
        }
      });

      res.status(200).send({
        success: true,
        message: "Delete tag successfully",
        data: response.data,
      });
    } catch (error: any) {
      next(
        new ErrorHandler(error.message, error.response?.status || error.status)
      );
    }
  }

  static async DeleteTag(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      let miro = miroBuilder(token);

      let { board_id, tag_id } = req.body;

      let response = await miro.delete(`/boards/${board_id}/tags/${tag_id}`);

      res.status(200).send({
        success: true,
        message: "Delete tag successfully",
        data: response.data,
      });
    } catch (error: any) {
      next(
        new ErrorHandler(error.message, error.response?.status || error.status)
      );
    }
  }

}
