import Joi from 'joi';

export const GetAllConnectorsDTO = Joi.object({
    board_id: Joi.string().required()
})

export const GetConnectorByIdDTO = Joi.object({
    board_id: Joi.string().required(),
    connector_id: Joi.string().required(),
})

export const CreateConnectorDTO = Joi.object({
    board_id: Joi.string().required(),
  startItem: Joi.object({
    id: Joi.string().required().label('Boshlang‘ich elementning noyob identifikatori (ID)'),
    position: Joi.object({
      x: Joi.string()
        .pattern(/^(100%|[0-9]{1,2}%?)$/)
        .required()
        .label('X o‘qi bo‘yicha koordinata (0% dan 100% gacha)'),
      y: Joi.string()
        .pattern(/^(100%|[0-9]{1,2}%?)$/)
        .required()
        .label('Y o‘qi bo‘yicha koordinata (0% dan 100% gacha)'),
    }).optional(),
    snapTo: Joi.string()
      .valid('auto', 'top', 'right', 'bottom', 'left')
      .optional()
      .label('Bog‘lanish joyi (auto, yuqori, o‘ng, past, chap)'),
  }).required(),

  endItem: Joi.object({
    id: Joi.string().required().label('Tugatish elementining noyob identifikatori (ID)'),
    position: Joi.object({
      x: Joi.string()
        .pattern(/^(100%|[0-9]{1,2}%?)$/)
        .required()
        .label('X o‘qi bo‘yicha koordinata (0% dan 100% gacha)'),
      y: Joi.string()
        .pattern(/^(100%|[0-9]{1,2}%?)$/)
        .required()
        .label('Y o‘qi bo‘yicha koordinata (0% dan 100% gacha)'),
    }).optional(),
    snapTo: Joi.string()
      .valid('auto', 'top', 'right', 'bottom', 'left')
      .optional()
      .label('Bog‘lanish joyi (auto, yuqori, o‘ng, past, chap)'),
  }).required(),

  shape: Joi.string()
    .valid('curved', 'straight', 'elbowed')
    .default('curved')
    .label('Ulanish chizig‘ining shakli (egri, to‘g‘ri, burilgan)'),

  captions: Joi.array()
    .items(
      Joi.object({
        content: Joi.string()
          .min(0)
          .max(200)
          .required()
          .label('Ulanish chizig‘ida ko‘rsatiladigan matn'),
        position: Joi.string()
          .pattern(/^(100%|[0-9]{1,2}%?)$/)
          .default('50%')
          .label('Matnning ulanish chizig‘idagi pozitsiyasi (0% dan 100% gacha)'),
        textAlignVertical: Joi.string()
          .valid('top', 'middle', 'bottom')
          .default('middle')
          .label('Matnning vertikal bo‘yicha hizalanishi (yuqori, o‘rta, past)'),
      })
    )
    .optional(),

  style: Joi.object({
    color: Joi.string()
      .pattern(/^#([0-9a-fA-F]{6})$/)
      .default('#1a1a1a')
      .label('Caption matni uchun rang (hex format)'),
    endStrokeCap: Joi.string()
      .valid(
        'none',
        'stealth',
        'diamond',
        'filled_diamond',
        'oval',
        'filled_oval',
        'arrow',
        'triangle',
        'filled_triangle',
        'erd_one',
        'erd_many',
        'erd_only_one',
        'erd_zero_or_one',
        'erd_one_or_many',
        'erd_zero_or_many',
        'unknown'
      )
      .default('stealth')
      .label('Ulanish chizig‘ining tugatish qismi uchun bezak (uchlar)'),
    fontSize: Joi.number()
      .min(10)
      .max(288)
      .default(14)
      .label('Matn uchun shrift o‘lchami (10dp dan 288dp gacha)'),
    startStrokeCap: Joi.string()
      .valid('none', 'stealth', 'diamond', 'filled_diamond', 'oval', 'filled_oval', 'arrow', 'triangle')
      .default('none')
      .label('Ulanish chizig‘ining boshlanish qismi uchun bezak (uchlar)'),
    strokeColor: Joi.string()
      .pattern(/^#([0-9a-fA-F]{6})$/)
      .default('#000000')
      .label('Ulanish chizig‘ining rangi (hex format)'),
    strokeStyle: Joi.string()
      .valid('normal', 'dashed', 'dotted')
      .default('normal')
      .label('Ulanish chizig‘ining uslubi (oddiy, chiziqli, nuqtali)'),
    strokeWidth: Joi.number()
      .min(1)
      .max(24)
      .default(1.0)
      .label('Ulanish chizig‘ining qalinligi (1dp dan 24dp gacha)'),
    textOrientation: Joi.string()
      .valid('horizontal', 'vertical')
      .default('horizontal')
      .label('Matnning yo‘nalishi (gorizontal yoki vertikal)'),
  }).optional(),
});


export const UpdateConnectorDTO = Joi.object({
  board_id: Joi.string().required(),
  connector_id: Joi.string().required(),
  startItem: Joi.object({
    id: Joi.string().optional().label('Boshlang‘ich elementning noyob identifikatori (ID)'),
    position: Joi.object({
      x: Joi.string()
        .pattern(/^(100%|[0-9]{1,2}%?)$/)
        .optional()
        .label('X o‘qi bo‘yicha koordinata (0% dan 100% gacha)'),
      y: Joi.string()
        .pattern(/^(100%|[0-9]{1,2}%?)$/)
        .optional()
        .label('Y o‘qi bo‘yicha koordinata (0% dan 100% gacha)'),
    }).optional(),
    snapTo: Joi.string()
      .valid('auto', 'top', 'right', 'bottom', 'left')
      .optional()
      .label('Bog‘lanish joyi (auto, yuqori, o‘ng, past, chap)'),
  }).optional(),

  endItem: Joi.object({
    id: Joi.string().optional().label('Tugatish elementining noyob identifikatori (ID)'),
    position: Joi.object({
      x: Joi.string()
        .pattern(/^(100%|[0-9]{1,2}%?)$/)
        .optional()
        .label('X o‘qi bo‘yicha koordinata (0% dan 100% gacha)'),
      y: Joi.string()
        .pattern(/^(100%|[0-9]{1,2}%?)$/)
        .optional()
        .label('Y o‘qi bo‘yicha koordinata (0% dan 100% gacha)'),
    }).optional(),
    snapTo: Joi.string()
      .valid('auto', 'top', 'right', 'bottom', 'left')
      .optional()
      .label('Bog‘lanish joyi (auto, yuqori, o‘ng, past, chap)'),
  }).optional(),

  shape: Joi.string()
    .valid('curved', 'straight', 'elbowed')
    .default('curved')
    .label('Ulanish chizig‘ining shakli (egri, to‘g‘ri, burilgan)'),

  captions: Joi.array()
    .items(
      Joi.object({
        content: Joi.string()
          .min(0)
          .max(200)
          .optional()
          .label('Ulanish chizig‘ida ko‘rsatiladigan matn'),
        position: Joi.string()
          .pattern(/^(100%|[0-9]{1,2}%?)$/)
          .default('50%')
          .label('Matnning ulanish chizig‘idagi pozitsiyasi (0% dan 100% gacha)'),
        textAlignVertical: Joi.string()
          .valid('top', 'middle', 'bottom')
          .default('middle')
          .label('Matnning vertikal bo‘yicha hizalanishi (yuqori, o‘rta, past)'),
      })
    )
    .optional(),

  style: Joi.object({
    color: Joi.string()
      .pattern(/^#([0-9a-fA-F]{6})$/)
      .default('#1a1a1a')
      .label('Caption matni uchun rang (hex format)'),
    endStrokeCap: Joi.string()
      .valid(
        'none',
        'stealth',
        'diamond',
        'filled_diamond',
        'oval',
        'filled_oval',
        'arrow',
        'triangle',
        'filled_triangle',
        'erd_one',
        'erd_many',
        'erd_only_one',
        'erd_zero_or_one',
        'erd_one_or_many',
        'erd_zero_or_many',
        'unknown'
      )
      .default('stealth')
      .label('Ulanish chizig‘ining tugatish qismi uchun bezak (uchlar)'),
    fontSize: Joi.number()
      .min(10)
      .max(288)
      .default(14)
      .label('Matn uchun shrift o‘lchami (10dp dan 288dp gacha)'),
    startStrokeCap: Joi.string()
      .valid('none', 'stealth', 'diamond', 'filled_diamond', 'oval', 'filled_oval', 'arrow', 'triangle')
      .default('none')
      .label('Ulanish chizig‘ining boshlanish qismi uchun bezak (uchlar)'),
    strokeColor: Joi.string()
      .pattern(/^#([0-9a-fA-F]{6})$/)
      .default('#000000')
      .label('Ulanish chizig‘ining rangi (hex format)'),
    strokeStyle: Joi.string()
      .valid('normal', 'dashed', 'dotted')
      .default('normal')
      .label('Ulanish chizig‘ining uslubi (oddiy, chiziqli, nuqtali)'),
    strokeWidth: Joi.number()
      .min(1)
      .max(24)
      .default(1.0)
      .label('Ulanish chizig‘ining qalinligi (1dp dan 24dp gacha)'),
    textOrientation: Joi.string()
      .valid('horizontal', 'vertical')
      .default('horizontal')
      .label('Matnning yo‘nalishi (gorizontal yoki vertikal)'),
  }).optional(),
});

export const DeleteConnectorDTO = Joi.object({
    board_id: Joi.string().required(),
    connector_id: Joi.string().required(),
})