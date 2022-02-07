import { DefineFunction, Schema } from "slack-cloud-sdk/mod.ts";
import { SLACK_API_URL } from "../utils/index.ts";

export const AddReaction = DefineFunction(
  "add_reaction",
  {
    title: "Add reactions",
    description: "Adds reaction to post",
    input_parameters: {
      required: ["channel", "stampNames", "timestamp"],
      properties: {
        channel: {
          type: Schema.slack.types.channel_id,
        },
        timestamp: {
          type: Schema.types.string,
          description: "timestamp of post",
        },
        stampNames: {
          type: Schema.types.string,
        },
      },
    },
    output_parameters: {
      required: [],
      properties: {},
    },
  },
  async ({ inputs, env }) => {
    const token = env["SLACK_API_SECRET_TOKEN"];

    const { channel, timestamp, stampNames } = inputs;

    for (const name of stampNames.split(",")) {
      const params = { channel, name, timestamp };
      const url = `${SLACK_API_URL}/reactions.add?${new URLSearchParams(
        params,
      )}`;

      await fetch(
        url,
        {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        },
      ).then((res) => res.text())
        .catch((err) => {
          console.log(err);
        });
    }

    return await {};
  },
);
