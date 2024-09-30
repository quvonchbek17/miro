import Joi from "joi";

export const createAppCardItemDto = Joi.object({
  board_id: Joi.string().required(),
  data: Joi.object({
    title: Joi.string().required(), // Title is required
    description: Joi.string().optional(), // Description is optional
    fields: Joi.array()
      .items(
        Joi.object({
          value: Joi.string().optional(), // Value is optional
          fillColor: Joi.string().optional(), // Hex color for fill
          iconShape: Joi.string().valid("round", "square").optional(), // Icon shape, can be 'round' or 'square'
          iconUrl: Joi.string().uri().optional(), // Valid URL for the icon
          textColor: Joi.string().optional(), // Hex color for text
          tooltip: Joi.string().optional(), // Tooltip is optional
        })
      )
      .optional(), // Fields are optional
    status: Joi.string()
      .valid("disconnected", "connected", "disabled")
      .optional(), // Status can be 'disconnected', 'connected', or 'disabled'
  }).required(), // Data is required
  style: Joi.object({
    fillColor: Joi.string().optional(), // Style fill color
  }).optional(), // Style is optional
  position: Joi.object({
    x: Joi.number().required(), // X coordinate
    y: Joi.number().required(), // Y coordinate
  }).required(), // Position is required
  geometry: Joi.object({
    height: Joi.number().optional(), // Height of the item
    width: Joi.number().optional(), // Width of the item
    rotation: Joi.number().optional(), // Rotation angle
  }).optional(), // Geometry is optional
  parent: Joi.object({
    id: Joi.string().optional(), // Parent frame ID
  }).optional(), // Parent frame is optional
});

export const GetAppCardItemByIdDto = Joi.object({
  board_id: Joi.string().required(),
  item_id: Joi.string().required(),
});

export const UpdateAppCardItemDto = Joi.object({
  board_id: Joi.string().required(),
  item_id: Joi.string().required(),
  data: Joi.object({
    title: Joi.string().optional(), // Title is optional
    description: Joi.string().optional(), // Description is optional
    fields: Joi.array()
      .items(
        Joi.object({
          value: Joi.string().required(), // Value is required
          fillColor: Joi.string().optional(), // Hex color for fill
          iconShape: Joi.string().valid("round", "square").optional(), // Icon shape, can be 'round' or 'square'
          iconUrl: Joi.string().uri().optional(), // Valid URL for the icon
          textColor: Joi.string().optional(), // Hex color for text
          tooltip: Joi.string().optional(), // Tooltip is optional
        })
      )
      .optional(), // Fields are optional
    status: Joi.string()
      .valid("disconnected", "connected", "disabled")
      .optional(), // Status can be 'disconnected', 'connected', or 'disabled'
  }).optional(), // Data is optional
  style: Joi.object({
    fillColor: Joi.string().optional(), // Style fill color
  }).optional(), // Style is optional
  position: Joi.object({
    x: Joi.number().optional(), // X coordinate
    y: Joi.number().optional(), // Y coordinate
  }).optional(), // Position is optional
  geometry: Joi.object({
    height: Joi.number().optional(), // Height of the item
    width: Joi.number().optional(), // Width of the item
    rotation: Joi.number().optional(), // Rotation angle
  }).optional(), // Geometry is optional
  parent: Joi.object({
    id: Joi.string().optional(), // Parent frame ID
  }).optional(), // Parent frame is optional
});

export const DeleteAppCardItemDto = Joi.object({
  board_id: Joi.string().required(),
  item_id: Joi.string().required(),
});
