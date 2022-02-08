import { Project } from "slack-cloud-sdk/mod.ts";
import { AddReaction } from "./functions/add_reaction.ts";
import { PostAndReact } from "./workflows/post_and_react.ts";
import { RepostAndReact } from "./workflows/repost_and_react.ts";
import { PostAndReactShortcut } from "./triggers/post_and_react_shortcut.ts";
import { RepostAndReactMessageShortcut } from "./triggers/repost_and_react_message_shortcut.ts";

Project({
  name: "very-simple-poll",
  description: "Post to slack and add reaction immediately",
  icon: "assets/senkyo_bako.png",
  runtime: "deno1.x",
  botScopes: ["commands", "chat:write", "chat:write.public", "reactions:write"],
  functions: [AddReaction],
  workflows: [PostAndReact, RepostAndReact],
  triggers: [PostAndReactShortcut, RepostAndReactMessageShortcut],
  tables: [],
  outgoingDomains: [],
});
