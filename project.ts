import { Project } from "slack-cloud-sdk/mod.ts";
import { AddReaction } from "./functions/add_reaction.ts";
import { PostAndReact } from "./workflows/post_and_react.ts";
import { PostAndReactShortcut } from "./triggers/post_and_react_shortcut.ts";

Project({
  name: "test-app",
  description:
    "A demo showing how to use Slack workflows, functions, and triggers",
  icon: "assets/icon.png",
  runtime: "deno1.x",
  botScopes: ["commands", "chat:write", "chat:write.public"],
  functions: [AddReaction],
  workflows: [PostAndReact],
  triggers: [PostAndReactShortcut],
  tables: [],
  outgoingDomains: [],
});
