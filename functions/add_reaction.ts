import { DefineFunction, Schema } from "slack-cloud-sdk/mod.ts";

export const AddReaction = DefineFunction(
  "add_reaction",
  {
    title: "Add reaction",
    description: "Echos string and adds reaction to it",
    input_parameters: {
      required: ["channel", "stampName", "timestamp"],
      properties: {
        channel: {
          type: Schema.slack.types.channel_id,
        },
        stampName: {
          type: Schema.types.string,
        },
        timestamp: {
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
    const baseUrl = env["SLACK_API_URL"];
    const token = env["SLACK_API_SECRET_TOKEN"];

    const { channel, stampName: name, timestamp } = inputs;
    const params = { channel, name, timestamp };
    const url = `${baseUrl}/reactions.add?${new URLSearchParams(params)}`;

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

    return await {};
  },
);
