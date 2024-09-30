import Joi from "joi";

export const CreateCardItemDto = Joi.object({
  board_id: Joi.string().required(),
  data: Joi.object({
    assigneeId: Joi.string().required(), // Unique user identifier (majburiy)
    description: Joi.string().optional(), // Karta uchun izoh (ixtiyoriy)
    dueDate: Joi.string().isoDate().optional(), // Vazifa tugash muddati, ISO 8601 formatida (ixtiyoriy)
    title: Joi.string().required(), // Karta sarlavhasi (majburiy)
  }).required(), // Data object (majburiy)
  style: Joi.object({
    cardTheme: Joi.string().optional(), // Karta uchun border rangi, hex formatda (ixtiyoriy)
  }).optional(), // Style object (ixtiyoriy)
  position: Joi.object({
    x: Joi.number().required(), // X koordinatasi (majburiy)
    y: Joi.number().required(), // Y koordinatasi (majburiy)
  }).required(), // Position object (majburiy)
  geometry: Joi.object({
    height: Joi.number().optional(), // Karta balandligi (ixtiyoriy)
    width: Joi.number().optional(), // Karta kengligi (ixtiyoriy)
    rotation: Joi.number().optional(), // Karta aylanish burchagi (ixtiyoriy)
  }).optional(), // Geometry object (ixtiyoriy)
  parent: Joi.object({
    id: Joi.string().optional(), // Parent frame ID (ixtiyoriy)
  }).optional(), // Parent object (ixtiyoriy)
});

export const GetCardItemByIdDto = Joi.object({
  board_id: Joi.string().required(),
  item_id: Joi.string().required(),
});

export const UpdateCardItemDto = Joi.object({
  board_id: Joi.string().required(),
  item_id: Joi.string().required(),
  data: Joi.object({
    assigneeId: Joi.string().optional(), // Unique user identifier (ixtiyoriy)
    description: Joi.string().optional(), // Karta uchun izoh (ixtiyoriy)
    dueDate: Joi.string().isoDate().optional(), // Vazifa tugash muddati, ISO 8601 formatida (ixtiyoriy)
    title: Joi.string().optional(), // Karta sarlavhasi (ixtiyoriy)
  }).optional(), // Data object (ixtiyoriy)
  style: Joi.object({
    cardTheme: Joi.string().optional(), // Karta uchun border rangi, hex formatda (ixtiyoriy)
  }).optional(), // Style object (ixtiyoriy)
  position: Joi.object({
    x: Joi.number().optional(), // X koordinatasi (ixtiyoriy)
    y: Joi.number().optional(), // Y koordinatasi (ixtiyoriy)
  }).optional(), // Position object (ixtiyoriy)
  geometry: Joi.object({
    height: Joi.number().optional(), // Karta balandligi (ixtiyoriy)
    width: Joi.number().optional(), // Karta kengligi (ixtiyoriy)
    rotation: Joi.number().optional(), // Karta aylanish burchagi (ixtiyoriy)
  }).optional(), // Geometry object (ixtiyoriy)
  parent: Joi.object({
    id: Joi.string().optional(), // Parent frame ID (ixtiyoriy)
  }).optional(), // Parent object (ixtiyoriy)
});

export const DeleteCardItemDto = Joi.object({
  board_id: Joi.string().required(),
  item_id: Joi.string().required(),
});
