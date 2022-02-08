import { DefineWorkflow, Schema } from "slack-cloud-sdk/mod.ts";
import { AddReaction } from "../functions/add_reaction.ts";

export const AddReactionWorkflow = DefineWorkflow("add_reaction_workflow", {
  title: "Add reactions",
  description: "Adds reaction to message. (for debug)",
  input_parameters: {
    required: ["string_to_post", "channel", "stampName"],
    properties: {
      channel: {
        type: Schema.slack.types.channel_id,
      },
      stampNames: {
        type: Schema.types.string,
      },
      timestamp: {
        type: Schema.types.string,
      },
    },
  },
});

AddReactionWorkflow.addStep(AddReaction, AddReactionWorkflow.inputs);
