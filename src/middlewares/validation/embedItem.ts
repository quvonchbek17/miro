import Joi from "joi";

export const GetEmbedItemByIdDTO = Joi.object({
  board_id: Joi.string().required(),
  item_id: Joi.string().required(),
});

export const CreateEmbedItemDTO = Joi.object({
  board_id: Joi.string().required(),
  data: Joi.object({
    mode: Joi.string().valid("inline", "modal").required(), // 'mode' faqat 'inline' yoki 'modal' qiymatlarini olishi mumkin, required
    previewUrl: Joi.string().uri(), // 'previewUrl' uri formatida bo'lishi kerak, ixtiyoriy
    url: Joi.string().uri().required(), // 'url' majburiy va uri formatida bo'lishi kerak
  }).required(), // 'data' obyekti majburiy
  position: Joi.object({
    x: Joi.number().required(), // 'x' koordinatasi son bo'lishi kerak, required
    y: Joi.number().required(), // 'y' koordinatasi son bo'lishi kerak, required
  }).required(), // 'position' obyekti majburiy
  geometry: Joi.object({
    height: Joi.number(), // 'height' son bo'lishi kerak, ixtiyoriy
    width: Joi.number(), // 'width' son bo'lishi kerak, ixtiyoriy
  }).xor("height", "width"), // 'height' yoki 'width'ning faqat bittasi berilishi kerak
  parent: Joi.object({
    id: Joi.string().allow(null), // 'parent.id' string yoki null bo'lishi mumkin
  }),
});

export const UpdateEmbedItemDTO = Joi.object({
  board_id: Joi.string().required(),
  item_id: Joi.string().required(),
  data: Joi.object({
    mode: Joi.string().valid("inline", "modal").optional(), // 'mode' faqat 'inline' yoki 'modal' qiymatlarini olishi mumkin, optional
    previewUrl: Joi.string().uri(), // 'previewUrl' uri formatida bo'lishi kerak, ixtiyoriy
    url: Joi.string().uri().optional(), // 'url' majburiy va uri formatida bo'lishi kerak
  }).optional(), // 'data' obyekti majburiy
  position: Joi.object({
    x: Joi.number().optional(), // 'x' koordinatasi son bo'lishi kerak, optional
    y: Joi.number().optional(), // 'y' koordinatasi son bo'lishi kerak, optional
  }).optional(), // 'position' obyekti majburiy
  geometry: Joi.object({
    height: Joi.number(), // 'height' son bo'lishi kerak, ixtiyoriy
    width: Joi.number(), // 'width' son bo'lishi kerak, ixtiyoriy
  }).xor("height", "width"), // 'height' yoki 'width'ning faqat bittasi berilishi kerak
  parent: Joi.object({
    id: Joi.string().allow(null), // 'parent.id' string yoki null bo'lishi mumkin
  }),
});

export const DeleteEmbedItemDTO = Joi.object({
  board_id: Joi.string().required(),
  item_id: Joi.string().required(),
});
