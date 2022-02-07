import { DefineWorkflow, Schema } from "slack-cloud-sdk/mod.ts";
import { AddReaction } from "../functions/add_reaction.ts";

export const PostAndReact = DefineWorkflow("post_and_react", {
  title: "Post, react",
  description: "Posts a string and adds reaction",
  input_parameters: {
    required: ["string_to_post", "channel", "stampName"],
    properties: {
      string_to_post: {
        type: Schema.types.string,
      },
      channel: {
        type: Schema.slack.types.channel_id,
      },
      stampName: {
        type: Schema.types.string,
      },
    },
  },
});

const { ts } = PostAndReact.addStep(Schema.slack.functions.SendMessage, {
  channel_id: PostAndReact.inputs.channel,
  message: PostAndReact.inputs.string_to_post,
}).outputs;

const { channel, stampName } = PostAndReact.inputs;
PostAndReact.addStep(AddReaction, {
  channel,
  stampName,
  timestamp: ts,
});
