import Joi from "joi";

export const GetStickyNoteItemByIdDTO = Joi.object({
  board_id: Joi.string().required(),
  item_id: Joi.string().required(),
});

export const CreateStickyNoteItemDTO = Joi.object({
  board_id: Joi.string().required(),
  data: Joi.object({
    content: Joi.string().required(),
    shape: Joi.string().valid("square", "rectangle").required(),
  }).required(),
  style: Joi.object({
    fillColor: Joi.string().optional(),
    textAlign: Joi.string().valid("left", "right", "center").optional(),
    textAlignVertical: Joi.string().valid("top", "middle", "bottom").optional(),
  }).optional(),
  position: Joi.object({
    x: Joi.number().required(),
    y: Joi.number().required(),
  }).required(),
  geometry: Joi.object({
    height: Joi.number().optional(),
    width: Joi.number().optional(),
  }).optional(),
  parent: Joi.object({
    id: Joi.string().optional(),
  }).optional(),
});

export const UpdateStickyNoteItemDTO = Joi.object({
  board_id: Joi.string().required(),
  item_id: Joi.string().required(),
  data: Joi.object({
    content: Joi.string().optional(),
    shape: Joi.string().valid("square", "rectangle").optional(),
  }).optional(),
  style: Joi.object({
    fillColor: Joi.string().optional(),
    textAlign: Joi.string().valid("left", "right", "center").optional(),
    textAlignVertical: Joi.string().valid("top", "middle", "bottom").optional(),
  }).optional(),
  position: Joi.object({
    x: Joi.number().optional(),
    y: Joi.number().optional(),
  }).optional(),
  geometry: Joi.object({
    height: Joi.number().optional(),
    width: Joi.number().optional(),
  }).optional(),
  parent: Joi.object({
    id: Joi.string().optional(),
  }).optional(),
});

export const DeleteStickyNoteItemDTO = Joi.object({
  board_id: Joi.string().required(),
  item_id: Joi.string().required(),
});
