const { App } = require("@slack/bolt");

app.message("hello", async ({ message, say }) => {
  console.log("receive message!");
  await say(`Hey there <@${message.user}>!`);
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
