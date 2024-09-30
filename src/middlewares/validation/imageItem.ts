import Joi from 'joi';
export const GetImageItemByIdDTO = Joi.object({
  board_id: Joi.string().required(),
  item_id: Joi.string().required()
});

export const CreateImageUsingUrlDTO = Joi.object({
  board_id: Joi.string().required(),
  data: Joi.object({
    title: Joi.string().optional(),
    altText: Joi.string().optional(),
    url: Joi.string().uri().required(),
  }).required(),
  position: Joi.object({
    x: Joi.number().required(),
    y: Joi.number().required(),
  }).optional(),
  geometry: Joi.object({
    height: Joi.number().optional(),
    width: Joi.number().optional(),
    rotation: Joi.number().optional(),
  }).optional(),
  parent: Joi.object({
    id: Joi.string().optional(),
  }).optional(),
});


export const UpdateImageUsingUrlDTO = Joi.object({
  board_id: Joi.string().required(),
  item_id: Joi.string().required(),
  data: Joi.object({
    title: Joi.string().optional(),
    altText: Joi.string().optional(),
    url: Joi.string().uri().optional(),
  }).optional(),
  position: Joi.object({
    x: Joi.number().optional(),
    y: Joi.number().optional(),
  }).optional(),
  geometry: Joi.object({
    height: Joi.number().optional(),
    width: Joi.number().optional(),
    rotation: Joi.number().optional(),
  }).optional(),
  parent: Joi.object({
    id: Joi.string().optional(),
  }).optional(),
});


export const DeleteImageItemDTO = Joi.object({
  board_id: Joi.string().required(),
  item_id: Joi.string().required()
});
