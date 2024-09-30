import Joi from "joi";

export const GetAllBoardsDTO = Joi.object({
  team_id: Joi.string().optional(),
  project_id: Joi.string().optional(),
  query: Joi.string().max(500).optional(),
  owner: Joi.string().optional(),
  limit: Joi.number().integer().min(1).max(50).default(20),
  offset: Joi.number().integer().min(0).default(0),
  sort: Joi.string()
    .valid(
      "default",
      "last_opened",
      "last_modified",
      "last_created",
      "alphabetically"
    )
    .default("default"),
});

export const GetAllBoardMembersDTO = Joi.object({
  board_id: Joi.string().required(),
  limit: Joi.number().integer().min(1).max(50).default(20),
  offset: Joi.number().integer().min(0).default(0),
});

export const GetBoardByIdDTO = Joi.object({
  board_id: Joi.string().required(),
});

export const GetBoardMemberByIdDTO = Joi.object({
  board_id: Joi.string().required(),
  member_id: Joi.string().required(),
});

export const CreateBoardDTO = Joi.object({
  name: Joi.string().min(1).max(50).required(),
  description: Joi.string().max(200).optional(),
  policy: Joi.object({
    permissionsPolicy: Joi.object({
      collaborationToolsStartAccess: Joi.string()
        .valid("all_editors", "board_owners_and_coowners")
        .optional(),
      copyAccess: Joi.string()
        .valid("anyone", "team_members", "team_editors", "board_owner")
        .optional(),
      sharingAccess: Joi.string()
        .valid("team_members_with_editing_rights", "owner_and_coowners")
        .optional(),
    }).optional(),
    sharingPolicy: Joi.object({
      access: Joi.string()
        .valid("private", "view", "edit", "comment")
        .optional(),
      inviteToAccountAndBoardLinkAccess: Joi.string()
        .valid("viewer", "commenter", "editor", "no_access")
        .optional(),
      organizationAccess: Joi.string()
        .valid("private", "view", "comment", "edit")
        .optional(),
      teamAccess: Joi.string()
        .valid("private", "edit", "comment", "view")
        .optional(),
    }).optional(),
  }).optional(),
  teamId: Joi.string().optional(),
  projectId: Joi.string().optional(),
});

export const ShareBoardDTO = Joi.object({
  board_id: Joi.string().required(),
  emails: Joi.array().items(Joi.string().email().required()).required(),
  role: Joi.string()
    .default("commenter")
    .valid("viewer", "commenter", "editor", "coowner", "owner"),
  message: Joi.string().optional(),
});

export const UpdateBoardMemberDTO = Joi.object({
  board_id: Joi.string().required(),
  member_id: Joi.string().required(),
  role: Joi.string()
    .valid("viewer", "commenter", "editor", "coowner", "owner")
    .required(),
});

export const CopyBoardDTO = Joi.object({
  copy_from: Joi.string().required(),
  name: Joi.string().min(1).max(50).required(),
  description: Joi.string().max(200).optional(),
  policy: Joi.object({
    permissionsPolicy: Joi.object({
      collaborationToolsStartAccess: Joi.string()
        .valid("all_editors", "board_owners_and_coowners")
        .optional(),
      copyAccess: Joi.string()
        .valid("anyone", "team_members", "team_editors", "board_owner")
        .optional(),
      sharingAccess: Joi.string()
        .valid("team_members_with_editing_rights", "owner_and_coowners")
        .optional(),
    }).optional(),
    sharingPolicy: Joi.object({
      access: Joi.string()
        .valid("private", "view", "edit", "comment")
        .optional(),
      inviteToAccountAndBoardLinkAccess: Joi.string()
        .valid("viewer", "commenter", "editor", "no_access")
        .optional(),
      organizationAccess: Joi.string()
        .valid("private", "view", "comment", "edit")
        .optional(),
      teamAccess: Joi.string()
        .valid("private", "edit", "comment", "view")
        .optional(),
    }).optional(),
  }).optional(),
  teamId: Joi.string().optional(),
});

export const UpdateBoardDTO = Joi.object({
  board_id: Joi.string().required(),
  name: Joi.string().min(1).max(50).optional(),
  description: Joi.string().max(200).optional(),
  policy: Joi.object({
    permissionsPolicy: Joi.object({
      collaborationToolsStartAccess: Joi.string()
        .valid("all_editors", "board_owners_and_coowners")
        .optional(),
      copyAccess: Joi.string()
        .valid("anyone", "team_members", "team_editors", "board_owner")
        .optional(),
      sharingAccess: Joi.string()
        .valid("team_members_with_editing_rights", "owner_and_coowners")
        .optional(),
    }).optional(),
    sharingPolicy: Joi.object({
      access: Joi.string()
        .valid("private", "view", "edit", "comment")
        .optional(),
      inviteToAccountAndBoardLinkAccess: Joi.string()
        .valid("viewer", "commenter", "editor", "no_access")
        .optional(),
      organizationAccess: Joi.string()
        .valid("private", "view", "comment", "edit")
        .optional(),
      teamAccess: Joi.string()
        .valid("private", "edit", "comment", "view")
        .optional(),
    }).optional(),
  }).optional(),
  teamId: Joi.string().optional(),
  projectId: Joi.string().optional(),
});

export const DeleteBoardDTO = Joi.object({
  board_id: Joi.string().required(),
});

export const RemoveBoardMemberDTO = Joi.object({
  board_id: Joi.string().required(),
  member_id: Joi.string().required(),
});
