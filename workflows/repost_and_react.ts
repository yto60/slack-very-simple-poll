import { DefineWorkflow, Schema } from "slack-cloud-sdk/mod.ts";
import { AddReaction } from "../functions/add_reaction.ts";

export const RepostAndReact = DefineWorkflow("post_and_react", {
  title: "Repost, react",
  description: "Reposts the message to another channel and adds reactions",
  input_parameters: {
    required: ["channel", "stampNames", "stringToPost"],
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

const { ts } = RepostAndReact.addStep(Schema.slack.functions.SendMessage, {
  channel_id: RepostAndReact.inputs.channel,
  message: RepostAndReact.inputs.stringToPost,
}).outputs;

const { channel, stampNames } = RepostAndReact.inputs;
RepostAndReact.addStep(AddReaction, {
  channel,
  stampNames,
  timestamp: ts,
});
