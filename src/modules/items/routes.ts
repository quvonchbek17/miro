import { validate } from "@middlewares"
import { ItemsController } from "./items"
import { DeleteBoardItemDto, GetAllBoardItemsDTO, GetBoardItemByIdDTO, UpdateBoardItemDto } from "@middlewares"

const { Router } = require("express")

const ItemsRouter = Router()

ItemsRouter
    .get("/all", validate(GetAllBoardItemsDTO, "query"), ItemsController.GetItemsOnBoard)
    .get("/get-by-id", validate(GetBoardItemByIdDTO, "query"), ItemsController.GetItemOnBoardById)
    .patch("/update", validate(UpdateBoardItemDto), ItemsController.UpdateItemOnBoard)
    .delete("/delete", validate(DeleteBoardItemDto), ItemsController.DeleteItemOnBoard)


export {ItemsRouter}