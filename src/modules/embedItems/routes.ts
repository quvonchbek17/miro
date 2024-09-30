import {  CreateEmbedItemDTO, DeleteEmbedItemDTO, GetEmbedItemByIdDTO, UpdateEmbedItemDTO, validate } from "@middlewares"
import { EmbedItemsController } from "./embedItems"

const { Router } = require("express")

const EmbedItemsRouter = Router()

EmbedItemsRouter
    .get("/get-by-id", validate(GetEmbedItemByIdDTO, "query"), EmbedItemsController.GetEmbedItemById)
    .post("/create", validate(CreateEmbedItemDTO), EmbedItemsController.CreateEmbedItem)
    .patch("/update", validate(UpdateEmbedItemDTO), EmbedItemsController.UpdateEmbedItem)
    .delete("/delete", validate(DeleteEmbedItemDTO), EmbedItemsController.DeleteEmbedItem)

export {EmbedItemsRouter}