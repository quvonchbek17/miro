import { CreateImageUsingUrlDTO, DeleteImageItemDTO, GetImageItemByIdDTO, UpdateImageUsingUrlDTO, validate } from "@middlewares"
import { ImageItemsController } from "./imageItems"
import { upload } from "@config"

const { Router } = require("express")

const ImageItemsRouter = Router()

ImageItemsRouter
    .get("/get-by-id", validate(GetImageItemByIdDTO, "query"), ImageItemsController.GetImageItemById)
    .post("/create", validate(CreateImageUsingUrlDTO), ImageItemsController.CreateImageItemUsingUrl)
    // .post("/create-using-file", upload.single("file"),  ImageItemsController.CreateImageItemUsingFile)
    .patch("/update-using-url", validate(UpdateImageUsingUrlDTO), ImageItemsController.UpdateImageItemUsingUrl)
    .delete("/delete", validate(DeleteImageItemDTO), ImageItemsController.DeleteImageItem)

export {ImageItemsRouter}