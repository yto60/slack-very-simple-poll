import { DefineTrigger, TriggerTypes } from "slack-cloud-sdk/mod.ts";
import { PostAndReact } from "../workflows/post_and_react.ts";

export const PostAndReactShortcut = DefineTrigger("postAndReactShortcut", {
  type: TriggerTypes.Shortcut,
  name: "Very Simple Poll",
  description: "Posts a string and adds emoji reactions",
})
  .runs(PostAndReact)
  .withInputs((ctx) => ({
    channel: ctx.data.channel_id,
  }));
