import { CreateTextItemDTO, DeleteTextItemDTO, GetTextItemByIdDTO, UpdateTextItemDTO, validate } from "@middlewares"
import { TextItemsController } from "./textItems"

const { Router } = require("express")

const TextItemsRouter = Router()

TextItemsRouter
    .get("/get-by-id", validate(GetTextItemByIdDTO, "query"), TextItemsController.GetTextItemById)
    .post("/create", validate(CreateTextItemDTO), TextItemsController.CreateTextItem)
    .patch("/update", validate(UpdateTextItemDTO), TextItemsController.UpdateTextItem)
    .delete("/delete", validate(DeleteTextItemDTO), TextItemsController.DeleteTextItem)

export {TextItemsRouter}