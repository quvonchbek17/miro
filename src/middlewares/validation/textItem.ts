import * as Joi from "joi";

export const GetTextItemByIdDTO = Joi.object({
  board_id: Joi.string().required(),
  item_id: Joi.string().required(),
});

export const CreateTextItemDTO = Joi.object({
  board_id: Joi.string().required(),
  data: Joi.object({
    content: Joi.string().required(),
  }).required(),
  style: Joi.object({
    color: Joi.string().optional(),
    fillColor: Joi.string().optional(),
    fillOpacity: Joi.number().min(0).max(1).optional(),
    fontFamily: Joi.string()
      .valid(
        "arial",
        "abril_fatface",
        "bangers",
        "eb_garamond",
        "georgia",
        "graduate",
        "gravitas_one",
        "fredoka_one",
        "nixie_one",
        "open_sans",
        "permanent_marker",
        "pt_sans",
        "pt_serif",
        "rammetto_one",
        "roboto",
        "roboto_condensed",
        "roboto_slab",
        "caveat",
        "times_new_roman",
        "titan_one",
        "lemon_tuesday"
      )
      .optional(),
    fontSize: Joi.number().min(1).required(),
    textAlign: Joi.string().valid("left", "right", "center").optional(),
  }).optional(),
  position: Joi.object({
    x: Joi.number().required(),
    y: Joi.number().required(),
  }).required(),
  geometry: Joi.object({
    rotation: Joi.number().optional(),
    width: Joi.number().optional(),
  }).optional(),
  parent: Joi.object({
    id: Joi.string().optional(),
  }).optional(),
});

export const UpdateTextItemDTO = Joi.object({
  board_id: Joi.string().required(),
  item_id: Joi.string().required(),
  data: Joi.object({
    content: Joi.string().optional(),
  }).optional(),
  style: Joi.object({
    color: Joi.string().optional(),
    fillColor: Joi.string().optional(),
    fillOpacity: Joi.number().min(0).max(1).optional(),
    fontFamily: Joi.string()
      .valid(
        "arial",
        "abril_fatface",
        "bangers",
        "eb_garamond",
        "georgia",
        "graduate",
        "gravitas_one",
        "fredoka_one",
        "nixie_one",
        "open_sans",
        "permanent_marker",
        "pt_sans",
        "pt_serif",
        "rammetto_one",
        "roboto",
        "roboto_condensed",
        "roboto_slab",
        "caveat",
        "times_new_roman",
        "titan_one",
        "lemon_tuesday"
      )
      .optional(),
    fontSize: Joi.number().min(1).optional(),
    textAlign: Joi.string().valid("left", "right", "center").optional(),
  }).optional(),
  position: Joi.object({
    x: Joi.number().optional(),
    y: Joi.number().optional(),
  }).optional(),
  geometry: Joi.object({
    rotation: Joi.number().optional(),
    width: Joi.number().optional(),
  }).optional(),
  parent: Joi.object({
    id: Joi.string().optional(),
  }).optional(),
});

export const DeleteTextItemDTO = Joi.object({
  board_id: Joi.string().required(),
  item_id: Joi.string().required(),
});
