import { CreateShapeItemDTO, DeleteShapeItemDTO, GetShapeItemByIdDTO, UpdateShapeItemDTO, validate } from "@middlewares"
import { ShapeItemsController } from "./shapeItems"

const { Router } = require("express")

const ShapeItemsRouter = Router()

ShapeItemsRouter
    .get("/get-by-id", validate(GetShapeItemByIdDTO, "query"), ShapeItemsController.GetShapeItemById)
    .post("/create", validate(CreateShapeItemDTO), ShapeItemsController.CreateShapeItem)
    .patch("/update", validate(UpdateShapeItemDTO), ShapeItemsController.UpdateShapeItem)
    .delete("/delete", validate(DeleteShapeItemDTO), ShapeItemsController.DeleteShapeItem)

export {ShapeItemsRouter}