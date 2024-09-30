import {  CopyBoardDTO, CreateBoardDTO, DeleteBoardDTO, GetAllBoardMembersDTO, GetAllBoardsDTO, GetBoardByIdDTO, GetBoardMemberByIdDTO, RemoveBoardMemberDTO, ShareBoardDTO, UpdateBoardDTO, UpdateBoardMemberDTO, validate } from "@middlewares"
import { BoardsController } from "./boards"

const { Router } = require("express")

const BoardsRouter = Router()

BoardsRouter
    .get("/all", validate(GetAllBoardsDTO, "query"), BoardsController.GetAllBoards)
    .get("/get-by-id", validate(GetBoardByIdDTO, "query"),  BoardsController.GetBoardById)
    .get("/board-members", validate(GetAllBoardMembersDTO, "query"),  BoardsController.GetAllBoardMembers)
    .get("/board-member-by-id", validate(GetBoardMemberByIdDTO, "query"),  BoardsController.GetBoardMemberById)
    .post("/create", validate(CreateBoardDTO),  BoardsController.CreateBoard)
    .post("/share", validate(ShareBoardDTO),  BoardsController.ShareBoard)
    .put("/copy", validate(CopyBoardDTO),  BoardsController.CopyBoard)
    .patch("/update", validate(UpdateBoardDTO),  BoardsController.UpdateBoard)
    .patch("/update-board-member", validate(UpdateBoardMemberDTO),  BoardsController.UpdateBoardMember)
    .delete("/delete", validate(DeleteBoardDTO),  BoardsController.DeleteBoard)
    .delete("/remove-board-member", validate(RemoveBoardMemberDTO),  BoardsController.RemoveBoardMember)


export {BoardsRouter}