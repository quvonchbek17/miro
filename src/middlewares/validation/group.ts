import Joi from "joi";

export const CreateGroupDTO = Joi.object({
  board_id: Joi.string().required(),
  data: Joi.object({
    items: Joi.array().items(Joi.string().required()).required(),
  }).required(),
});

export const GetAllGroupsDTO = Joi.object({
  board_id: Joi.string().required(),
  limit: Joi.number().integer().min(10).max(50).default(10),
  cursor: Joi.string().optional(),
});

export const GetGroupByIdDTO = Joi.object({
  board_id: Joi.string().required(),
  group_id: Joi.string().required(),
});

export const GetGroupItemsDTO = Joi.object({
  board_id: Joi.string().required(),
  group_id: Joi.string().required(),
  limit: Joi.number().integer().min(10).max(50).default(10),
  cursor: Joi.string().optional(),
});

export const UpdateGroupDTO = Joi.object({
  board_id: Joi.string().required(),
  group_id: Joi.string().required(),
  data: Joi.object({
    items: Joi.array().items(Joi.string().required()).required(),
  }).required(),
});

export const DeleteItemsFromGroupDTO = Joi.object({
  board_id: Joi.string().required(),
  group_id: Joi.string().required(),
  delete_items: Joi.array().items(Joi.string().required()).required(),
});

export const DeleteGroupWithItemsDTO = Joi.object({
    board_id: Joi.string().required(),
    group_id: Joi.string().required(),
    delete_items: Joi.boolean().required(),
});
