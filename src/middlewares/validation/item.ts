import Joi from "joi";

export const GetAllBoardItemsDTO = Joi.object({
  board_id: Joi.string().required(),
  limit: Joi.number().min(10).max(50).default(10),
  type: Joi.string().valid(
    "app_card",
    "card",
    "document",
    "embed",
    "frame",
    "image",
    "shape",
    "sticky_note",
    "text"
  ),
  cursor: Joi.string().optional(),
});

export const GetBoardItemByIdDTO = Joi.object({
  board_id: Joi.string().required(),
  item_id: Joi.string().required(),
});

export const UpdateBoardItemDto = Joi.object({
  board_id: Joi.string().required(),
  item_id: Joi.string().required(),
  parent: Joi.object({
    id: Joi.string().allow(null),
  }).required(),

  position: Joi.object({
    x: Joi.number().default(0),

    y: Joi.number().default(0),
  }).required(),
});

export const DeleteBoardItemDto = Joi.object({
  board_id: Joi.string().required(),
  item_id: Joi.string().required()
});
