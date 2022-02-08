import { DefineTrigger, TriggerTypes } from "slack-cloud-sdk/mod.ts";
import { RepostAndReact } from "../workflows/repost_and_react.ts";

export const RepostAndReactMessageShortcut = DefineTrigger(
  "repostAndReactMessageShortcut",
  {
    type: TriggerTypes.MessageShortcut,
    name: "Very Simple Poll",
    description: "Repost message to another channel and add reaction",
  },
)
  .runs(RepostAndReact)
  .withInputs((ctx) => ({
    channel: ctx.data.channel_id,
    timestamp: ctx.data.message.ts,
    stringToPost: ctx.data.message.text,
  }));
