import Joi from "joi";

export const CreateTagDTO = Joi.object({
  board_id: Joi.string().required(),
  fillColor: Joi.string()
    .valid(
      "red",
      "light_green",
      "cyan",
      "yellow",
      "magenta",
      "green",
      "blue",
      "gray",
      "violet",
      "dark_green",
      "dark_blue",
      "black"
    )
    .default("red"),
  title: Joi.string().min(1).max(120).required(),
});

export const GetBoardTagsDTO = Joi.object({
  board_id: Joi.string().required(), // Taxtaning noyob identifikatori (talab qilinadi)
  limit: Joi.number().integer().min(1).max(50).default(20), // Bir so'rovda qaytarilishi mumkin bo'lgan elementlar soni (1 dan 50 gacha, standart: 20)
  offset: Joi.number().integer().default(0), // Birinchi elementning ko'chish darajasi (standart: 0)
});

export const GetTagByIdDTO = Joi.object({
  board_id: Joi.string().required(),
  tag_id: Joi.string().required(),
});

export const GetItemsByTagDTO = Joi.object({
  board_id: Joi.string().required(),
  tag_id: Joi.string().required(),
  limit: Joi.number().integer().min(1).max(50).default(20),
  offset: Joi.number().integer().default(0),
});

export const AttachTagToItemDTO = Joi.object({
  board_id: Joi.string().required(),
  tag_id: Joi.string().required(),
  item_id: Joi.string().required(),
});

export const UpdateTagDTO = Joi.object({
  board_id: Joi.string().required(),
  tag_id: Joi.string().required(),
  fillColor: Joi.string()
    .valid(
      "red",
      "light_green",
      "cyan",
      "yellow",
      "magenta",
      "green",
      "blue",
      "gray",
      "violet",
      "dark_green",
      "dark_blue",
      "black"
    )
    .default("red"),
  title: Joi.string().min(1).max(120).optional(),
});


export const GetTagsFromItemDTO = Joi.object({
  board_id: Joi.string().required(),
  item_id: Joi.string().required(),
});

export const DeleteTagFromItemDTO = Joi.object({
  board_id: Joi.string().required(),
  tag_id: Joi.string().required(),
  item_id: Joi.string().required(),
});

export const DeleteTagDTO = Joi.object({
  board_id: Joi.string().required(),
  tag_id: Joi.string().required()
});