import { DefineTrigger, TriggerTypes } from "slack-cloud-sdk/mod.ts";
import { AddReactionWorkflow } from "../workflows/add_reaction.ts";

export const AddReactionTrigger = DefineTrigger("addReaction", {
  type: TriggerTypes.MessageShortcut,
  name: "add reaction",
  description: "for debug",
})
  .runs(AddReactionWorkflow)
  .withInputs((ctx) => ({
    channel: ctx.data.channel_id,
    timestamp: ctx.data.message.ts,
    stampNames: "one,two,three",
  }));
