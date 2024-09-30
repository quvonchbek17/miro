import { CreateDocumentItemDTO, DeleteDocumentItemDTO, GetDocumentItemByIdDTO, UpdateDocumentItemDTO, validate } from "@middlewares"
import { DocumentItemsController } from "./documentItems"

const { Router } = require("express")

const DocumentItemsRouter = Router()

DocumentItemsRouter
    .get("/get-by-id", validate(GetDocumentItemByIdDTO, "query"), DocumentItemsController.GetDocumentItemById)
    .post("/create", validate(CreateDocumentItemDTO), DocumentItemsController.CreateDocumentItem)
    .patch("/update", validate(UpdateDocumentItemDTO), DocumentItemsController.UpdateDocumentItem)
    .delete("/delete", validate(DeleteDocumentItemDTO), DocumentItemsController.DeleteDocumentItem)

export {DocumentItemsRouter}