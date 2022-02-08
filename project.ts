import { Project } from "slack-cloud-sdk/mod.ts";
import { AddReaction } from "./functions/add_reaction.ts";
import { PostAndReact } from "./workflows/post_and_react.ts";
import { RepostAndReact } from "./workflows/repost_and_react.ts";
import { PostAndReactShortcut } from "./triggers/post_and_react_shortcut.ts";
import { RepostAndReactTrigger } from "./triggers/repost_and_react_trigger.ts.ts";

Project({
  name: "poll-with-stamp-helper",
  description: "Post to slack and add reaction immediately",
  icon: "assets/icon.png",
  runtime: "deno1.x",
  botScopes: ["commands", "chat:write", "chat:write.public", "reactions:write"],
  functions: [AddReaction],
  workflows: [PostAndReact, RepostAndReact],
  triggers: [PostAndReactShortcut, RepostAndReactTrigger],
  tables: [],
  outgoingDomains: [],
});
