import { CreateGroupDTO, DeleteGroupWithItemsDTO, DeleteItemsFromGroupDTO, GetAllGroupsDTO, GetGroupByIdDTO, GetGroupItemsDTO, UpdateGroupDTO, validate } from "@middlewares"
import { GroupsController } from "./groups"

const { Router } = require("express")

const GroupsRouter = Router()

GroupsRouter
    .get("/all", validate(GetAllGroupsDTO, "query"), GroupsController.GetAllGroups)
    .get("/get-by-id", validate(GetGroupByIdDTO, "query"), GroupsController.GetGroupById)
    .get("/get-items", validate(GetGroupItemsDTO, "query"), GroupsController.GetGroupItems)
    .post("/create", validate(CreateGroupDTO), GroupsController.CreateGroup)
    .put("/update", validate(UpdateGroupDTO), GroupsController.UpdateGroup)
    .delete("/delete-items", validate(DeleteItemsFromGroupDTO), GroupsController.DeleteItemFromGroup)
    .delete("/delete-with-items", validate(DeleteGroupWithItemsDTO), GroupsController.DeleteGroupWithItems)

export {GroupsRouter}