import Joi from "joi";

export const GetFrameItemByIdDTO = Joi.object({
  board_id: Joi.string().required(),
  item_id: Joi.string().required(),
});

export const CreateFrameItemDTO = Joi.object({
  board_id: Joi.string().required(),
  data: Joi.object({
    format: Joi.string().valid("custom").required(), // 'format' qiymati faqat 'custom' bo'lishi kerak, required
    title: Joi.string().default("Sample frame title"), // 'title' string bo'lishi kerak, default qiymati berilgan
    type: Joi.string().valid("freeform").required(), // 'type' faqat 'freeform' bo'lishi mumkin, required
    showContent: Joi.boolean().default(true), // 'showContent' true yoki false bo'lishi mumkin, default true
  }).required(), // 'data' obyekti majburiy
  style: Joi.object({
    fillColor: Joi.string().hex().default("#ffffffff"), // 'fillColor' hexadecimal formatda rang bo'lishi kerak, default transparent
  }),
  position: Joi.object({
    x: Joi.number().required(), // 'x' koordinatasi son bo'lishi kerak, required
    y: Joi.number().required(), // 'y' koordinatasi son bo'lishi kerak, required
  }).required(), // 'position' obyekti majburiy
  geometry: Joi.object({
    height: Joi.number(), // 'height' son bo'lishi kerak, ixtiyoriy
    width: Joi.number(), // 'width' son bo'lishi kerak, ixtiyoriy
  }).xor("height", "width"), // 'height' yoki 'width' faqat bittasi berilishi kerak
});

export const UpdateFrameItemDTO = Joi.object({
  board_id: Joi.string().required(),
  item_id: Joi.string().required(),
  data: Joi.object({
    format: Joi.string().valid("custom").optional(), // 'format' qiymati faqat 'custom' bo'lishi kerak, optional
    title: Joi.string().default("Sample frame title"), // 'title' string bo'lishi kerak, default qiymati berilgan
    type: Joi.string().valid("freeform").optional(), // 'type' faqat 'freeform' bo'lishi mumkin, optional
    showContent: Joi.boolean().default(true), // 'showContent' true yoki false bo'lishi mumkin, default true
  }).optional(), // 'data' obyekti majburiy
  style: Joi.object({
    fillColor: Joi.string().hex().default("#ffffffff"), // 'fillColor' hexadecimal formatda rang bo'lishi kerak, default transparent
  }),
  position: Joi.object({
    x: Joi.number().optional(), // 'x' koordinatasi son bo'lishi kerak, optional
    y: Joi.number().optional(), // 'y' koordinatasi son bo'lishi kerak, optional
  }).optional(), // 'position' obyekti majburiy
  geometry: Joi.object({
    height: Joi.number(), // 'height' son bo'lishi kerak, ixtiyoriy
    width: Joi.number(), // 'width' son bo'lishi kerak, ixtiyoriy
  }).xor("height", "width"), // 'height' yoki 'width' faqat bittasi berilishi kerak
});

export const DeleteFrameItemDTO = Joi.object({
  board_id: Joi.string().required(),
  item_id: Joi.string().required(),
});
