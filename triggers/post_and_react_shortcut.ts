import { DefineTrigger, TriggerTypes } from "slack-cloud-sdk/mod.ts";
import { PostAndReact } from "../workflows/post_and_react.ts";

export const PostAndReactShortcut = DefineTrigger("postAndReactShortcut", {
  type: TriggerTypes.Shortcut,
  name: "Post and React",
  description: "Posts a string and adds emoji reaction",
})
  .runs(PostAndReact)
  .withInputs((ctx) => ({
    channel: ctx.data.channel_id,
  }));
