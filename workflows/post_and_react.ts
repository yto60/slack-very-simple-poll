import { DefineWorkflow, Schema } from "slack-cloud-sdk/mod.ts";
import { AddReaction } from "../functions/add_reaction.ts";

export const PostAndReact = DefineWorkflow("post_and_react", {
  title: "Post, react",
  description: "Posts a string and adds reactions",
  input_parameters: {
    required: ["stringToPost", "channel", "stampNames"],
    properties: {
      stringToPost: {
        type: Schema.types.string,
        description: "Question",
      },
      channel: {
        type: Schema.slack.types.channel_id,
        description: "Channel",
      },
      stampNames: {
        type: Schema.types.string,
        description:
          "Emoji names to react with, splitted in comma (example: one,two,three)",
      },
    },
  },
});

const { ts } = PostAndReact.addStep(Schema.slack.functions.SendMessage, {
  channel_id: PostAndReact.inputs.channel,
  message: PostAndReact.inputs.stringToPost,
}).outputs;

const { channel, stampNames } = PostAndReact.inputs;
PostAndReact.addStep(AddReaction, {
  channel,
  stampNames,
  timestamp: ts,
});
