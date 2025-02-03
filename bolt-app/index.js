const { App } = require("@slack/bolt");

// const app = new App({
//   token: process.env.SLACK_BOT_TOKEN,
//   signingSecret: process.env.SLACK_SIGNING_SECRET,
//   socketMode: true,
//   appToken: process.env.SLACK_APP_TOKEN
// });

app.message("hello", async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say({
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "test message",
        },
      },
      {
        type: "actions",
        elements: [
          {
            type: "button",
            text: {
              type: "plain_text",
              emoji: true,
              text: "Approve",
            },
            style: "primary",
            value: "click_me_123",
            action_id: "action_approve",
          },
          {
            type: "button",
            text: {
              type: "plain_text",
              emoji: true,
              text: "Deny",
            },
            style: "danger",
            value: "click_me_123",
            action_id: "action_deny",
          },
        ],
      },
    ],
  });
});

app.action("action_approve", async ({ ack }) => {
  console.log("receive action_approve!");

  await ack();
});

app.action("action_deny", async ({ ack }) => {
  console.log("receive action_deny!");

  await ack();
});

(async () => {
  await app.start(process.env.PORT || 3000);

  app.logger.info("⚡️ Bolt app is running!");
})();
