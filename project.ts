import { Project } from "slack-cloud-sdk/mod.ts";
import { AddReaction } from "./functions/add_reaction.ts";
import { PostAndReact } from "./workflows/post_and_react.ts";
import { AddReactionWorkflow } from "./workflows/add_reaction.ts";
import { PostAndReactShortcut } from "./triggers/post_and_react_shortcut.ts";

Project({
  name: "poll-with-stamp-helper",
  description: "Post to slack and add reaction immediately",
  icon: "assets/icon.png",
  runtime: "deno1.x",
  botScopes: ["commands", "chat:write", "chat:write.public", "reactions:write"],
  functions: [AddReaction],
  workflows: [PostAndReact, AddReactionWorkflow],
  triggers: [PostAndReactShortcut],
  tables: [],
  outgoingDomains: [],
});
