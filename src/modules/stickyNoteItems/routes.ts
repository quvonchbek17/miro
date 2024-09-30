import { CreateShapeItemDTO, CreateStickyNoteItemDTO, DeleteShapeItemDTO, DeleteStickyNoteItemDTO, GetShapeItemByIdDTO, GetStickyNoteItemByIdDTO, UpdateShapeItemDTO, UpdateStickyNoteItemDTO, validate } from "@middlewares"
import { StickyNoteItemsController } from "./stickyNoteItems"

const { Router } = require("express")

const StickyNoteItemsRouter = Router()

StickyNoteItemsRouter
    .get("/get-by-id", validate(GetStickyNoteItemByIdDTO, "query"), StickyNoteItemsController.GetStickyNoteItemById)
    .post("/create", validate(CreateStickyNoteItemDTO), StickyNoteItemsController.CreateStickyNoteItem)
    .patch("/update", validate(UpdateStickyNoteItemDTO), StickyNoteItemsController.UpdateStickyNoteItem)
    .delete("/delete", validate(DeleteStickyNoteItemDTO), StickyNoteItemsController.DeleteStickyNoteItem)

export {StickyNoteItemsRouter}