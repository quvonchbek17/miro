import { AttachTagToItemDTO, CreateTagDTO, DeleteTagDTO, DeleteTagFromItemDTO, GetBoardTagsDTO, GetItemsByTagDTO, GetTagByIdDTO, GetTagsFromItemDTO, UpdateTagDTO, validate } from "@middlewares"
import { TagsController } from "./tags"

const { Router } = require("express")

const TagsRouter = Router()

TagsRouter
    .get("/board-tags", validate(GetBoardTagsDTO, "query"), TagsController.GetBoardTags)
    .get("/get-by-id", validate(GetTagByIdDTO, "query"), TagsController.GetTagById)
    .get("/get-items-by-tag", validate(GetItemsByTagDTO, "query"), TagsController.GetItemsByTag)
    .get("/get-tags-from-item", validate(GetTagsFromItemDTO, "query"), TagsController.GetTagssFromItem)
    .post("/create", validate(CreateTagDTO), TagsController.CreateTag)
    .post("/attach-tag-to-item", validate(AttachTagToItemDTO), TagsController.AttachTagToItem)
    .patch("/update", validate(UpdateTagDTO), TagsController.UpdateTag)
    .delete("/delete-tag-from-item", validate(DeleteTagFromItemDTO), TagsController.DeleteTagFromItem)
    .delete("/delete-tag", validate(DeleteTagDTO), TagsController.DeleteTag)

export {TagsRouter}