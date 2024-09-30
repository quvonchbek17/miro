import Joi from "joi";

export const GetDocumentItemByIdDTO = Joi.object({
    board_id: Joi.string().required(),
    item_id: Joi.string().required()
})

export const CreateDocumentItemDTO = Joi.object({
  board_id: Joi.string().required(),
  data: Joi.object({
    title: Joi.string().required().label("Hujjat nomi"),
    url: Joi.string().uri().required().label("Hujjat URL manzili"),
  })
    .required()
    .label("Hujjat haqida ma’lumot"),

  position: Joi.object({
    x: Joi.number()
      .required()
      .label("X o‘qi bo‘yicha koordinata (taxtadagi joy)"),
    y: Joi.number()
      .required()
      .label("Y o‘qi bo‘yicha koordinata (taxtadagi joy)"),
  })
    .required()
    .label("Elementning taxtadagi joylashuvi"),

  geometry: Joi.object({
    height: Joi.number().optional().label("Element balandligi (piksellarda)"),
    width: Joi.number().optional().label("Element kengligi (piksellarda)"),
    rotation: Joi.number()
      .optional()
      .label("Elementning aylanish burchagi (darajalarda)"),
  })
    .optional()
    .label("Elementning geometrik ma’lumotlari"),

  parent: Joi.object({
    id: Joi.string().allow(null).label("Elementning parent frame ID-si"),
  })
    .optional()
    .label("Elementning parent frame ma’lumotlari"),
});


export const UpdateDocumentItemDTO = Joi.object({
    board_id: Joi.string().required(),
    item_id: Joi.string().required(),
    data: Joi.object({
      title: Joi.string().optional().label("Hujjat nomi"),
      url: Joi.string().uri().optional().label("Hujjat URL manzili"),
    })
      .optional()
      .label("Hujjat haqida ma’lumot"),

    position: Joi.object({
      x: Joi.number()
        .optional()
        .label("X o‘qi bo‘yicha koordinata (taxtadagi joy)"),
      y: Joi.number()
        .optional()
        .label("Y o‘qi bo‘yicha koordinata (taxtadagi joy)"),
    })
      .optional()
      .label("Elementning taxtadagi joylashuvi"),

    geometry: Joi.object({
      height: Joi.number().optional().label("Element balandligi (piksellarda)"),
      width: Joi.number().optional().label("Element kengligi (piksellarda)"),
      rotation: Joi.number()
        .optional()
        .label("Elementning aylanish burchagi (darajalarda)"),
    })
      .optional()
      .label("Elementning geometrik ma’lumotlari"),

    parent: Joi.object({
      id: Joi.string().allow(null).label("Elementning parent frame ID-si"),
    })
      .optional()
      .label("Elementning parent frame ma’lumotlari"),
  });


  export const DeleteDocumentItemDTO = Joi.object({
    board_id: Joi.string().required(),
    item_id: Joi.string().required()
})