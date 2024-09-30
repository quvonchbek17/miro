import { createAppCardItemDto, DeleteAppCardItemDto, GetAppCardItemByIdDto, UpdateAppCardItemDto, validate } from "@middlewares"
import { AppCardItemsController } from "./appCardItems"

const { Router } = require("express")

const AppCardItemsRouter = Router()

AppCardItemsRouter
    .get("/get-by-id", validate(GetAppCardItemByIdDto, "query"), AppCardItemsController.GetAppCardItemById)
    .post("/create", validate(createAppCardItemDto), AppCardItemsController.CreateAppCardItem)
    .patch("/update", validate(UpdateAppCardItemDto), AppCardItemsController.UpdateAppCardItem)
    .delete("/delete", validate(DeleteAppCardItemDto), AppCardItemsController.DeleteAppCardItem)


export {AppCardItemsRouter}