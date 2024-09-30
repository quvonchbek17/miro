import {CreateConnectorDTO, DeleteConnectorDTO, GetAllConnectorsDTO, GetConnectorByIdDTO, UpdateConnectorDTO, validate } from "@middlewares"
import { ConnectorsController } from "./connectors"

const { Router } = require("express")

const ConnectorsRouter = Router()

ConnectorsRouter
    .get("/all", validate(GetAllConnectorsDTO, "query"), ConnectorsController.GetAllConnectors)
    .get("/get-by-id", validate(GetConnectorByIdDTO, "query"), ConnectorsController.GetConnectorById)
    .post("/create", validate(CreateConnectorDTO), ConnectorsController.CreateConnector)
    .patch("/update", validate(UpdateConnectorDTO), ConnectorsController.UpdateConnector)
    .delete("/delete", validate(DeleteConnectorDTO), ConnectorsController.DeleteConnector)

export {ConnectorsRouter}