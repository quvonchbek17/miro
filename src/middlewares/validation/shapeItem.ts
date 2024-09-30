import Joi from "joi";

export const GetShapeItemByIdDTO = Joi.object({
  board_id: Joi.string().required(),
  item_id: Joi.string().required(),
});

export const CreateShapeItemDTO = Joi.object({
  board_id: Joi.string().required(),
  data: Joi.object({
    content: Joi.string().required(),
    shape: Joi.string()
      .valid(
        "rectangle",
        "round_rectangle",
        "circle",
        "triangle",
        "rhombus",
        "parallelogram",
        "trapezoid",
        "pentagon",
        "hexagon",
        "octagon",
        "wedge_round_rectangle_callout",
        "star",
        "flow_chart_predefined_process",
        "cloud",
        "cross",
        "can",
        "right_arrow",
        "left_arrow",
        "left_right_arrow",
        "left_brace",
        "right_brace"
      )
      .required(),
  }).required(),
  style: Joi.object({
    borderColor: Joi.string().optional(),
    borderOpacity: Joi.number().min(0).max(1).optional(),
    borderStyle: Joi.string().optional(),
    borderWidth: Joi.number().min(1).max(24).optional(),
    color: Joi.string().optional(),
    fillColor: Joi.string().optional(),
    fillOpacity: Joi.number().min(0).max(1).optional(),
    fontFamily: Joi.string().optional(),
    fontSize: Joi.number().min(10).max(288).optional(),
    textAlign: Joi.string().optional(),
    textAlignVertical: Joi.string().optional(),
  }).optional(),
  position: Joi.object({
    x: Joi.number().required(),
    y: Joi.number().required(),
  }).required(),
  geometry: Joi.object({
    height: Joi.number().optional(),
    width: Joi.number().optional(),
    rotation: Joi.number().optional(),
  }).optional(),
  parent: Joi.object({
    id: Joi.string().optional(),
  }).optional(),
});

export const UpdateShapeItemDTO = Joi.object({
  board_id: Joi.string().required(),
  item_id: Joi.string().required(),
  data: Joi.object({
    content: Joi.string().optional(),
    shape: Joi.string()
      .valid(
        "rectangle",
        "round_rectangle",
        "circle",
        "triangle",
        "rhombus",
        "parallelogram",
        "trapezoid",
        "pentagon",
        "hexagon",
        "octagon",
        "wedge_round_rectangle_callout",
        "star",
        "flow_chart_predefined_process",
        "cloud",
        "cross",
        "can",
        "right_arrow",
        "left_arrow",
        "left_right_arrow",
        "left_brace",
        "right_brace"
      )
      .optional(),
  }).optional(),
  style: Joi.object({
    borderColor: Joi.string().optional(),
    borderOpacity: Joi.number().min(0).max(1).optional(),
    borderStyle: Joi.string().optional(),
    borderWidth: Joi.number().min(1).max(24).optional(),
    color: Joi.string().optional(),
    fillColor: Joi.string().optional(),
    fillOpacity: Joi.number().min(0).max(1).optional(),
    fontFamily: Joi.string().optional(),
    fontSize: Joi.number().min(10).max(288).optional(),
    textAlign: Joi.string().optional(),
    textAlignVertical: Joi.string().optional(),
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

export const DeleteShapeItemDTO = Joi.object({
  board_id: Joi.string().required(),
  item_id: Joi.string().required(),
});
