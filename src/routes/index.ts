import { AppCardItemsRouter, AuthRouter, BoardsRouter, CardItemsRouter, ConnectorsRouter, DocumentItemsRouter, EmbedItemsRouter, FrameItemsRouter, GroupsRouter, ImageItemsRouter, ItemsRouter, ShapeItemsRouter, StickyNoteItemsRouter, TagsRouter, TextItemsRouter } from "@modules"

const { Router } = require("express")

const router = Router()


router.use("/auth", AuthRouter)
router.use("/boards", BoardsRouter)
router.use("/items", ItemsRouter)
router.use("/app-card-items", AppCardItemsRouter)
router.use("/card-items", CardItemsRouter)
router.use("/connectors", ConnectorsRouter)
router.use("/document-items", DocumentItemsRouter)
router.use("/embed-items", EmbedItemsRouter)
router.use("/frame-items", FrameItemsRouter)
router.use("/image-items", ImageItemsRouter)
router.use("/shape-items", ShapeItemsRouter)
router.use("/sticky-note-items", StickyNoteItemsRouter)
router.use("/text-items", TextItemsRouter)
router.use("/groups", GroupsRouter)
router.use("/tags", TagsRouter)


export default router