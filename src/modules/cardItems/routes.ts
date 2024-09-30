import { CreateCardItemDto, DeleteCardItemDto, GetCardItemByIdDto, UpdateCardItemDto, validate } from "@middlewares"
import { CardItemsController } from "./cardItems"

const { Router } = require("express")

const CardItemsRouter = Router()

CardItemsRouter
    .get("/get-by-id", validate(GetCardItemByIdDto, "query"), CardItemsController.GetCardItemById)
    .post("/create", validate(CreateCardItemDto), CardItemsController.CreateCardItem)
    .patch("/update", validate(UpdateCardItemDto), CardItemsController.UpdateCardItem)
    .delete("/delete", validate(DeleteCardItemDto), CardItemsController.DeleteCardItem)

export {CardItemsRouter}