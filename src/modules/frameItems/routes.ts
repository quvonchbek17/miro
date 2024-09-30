import { CreateFrameItemDTO, DeleteFrameItemDTO, GetFrameItemByIdDTO, UpdateFrameItemDTO, validate } from "@middlewares"
import { FrameItemsController } from "./frameItems"

const { Router } = require("express")

const FrameItemsRouter = Router()

FrameItemsRouter
    .get("/get-by-id", validate(GetFrameItemByIdDTO, "query"), FrameItemsController.GetFrameItemById)
    .post("/create", validate(CreateFrameItemDTO), FrameItemsController.CreateFrameItem)
    .patch("/update", validate(UpdateFrameItemDTO), FrameItemsController.UpdateFrameItem)
    .delete("/delete", validate(DeleteFrameItemDTO), FrameItemsController.DeleteFrameItem)

export {FrameItemsRouter}