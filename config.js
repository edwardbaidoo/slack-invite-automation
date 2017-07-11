module.exports = {
  // your community or team name to display on join page.
  community: process.env.COMMUNITY_NAME || 'CSIT DE 2015 CLASS',
  // your slack team url (ex: socketio.slack.com)
  slackUrl: process.env.SLACK_URL || 'csitde2015.slack.com',
  // access token of slack
  // You can generate it in https://api.slack.com/web#auth
  // You should generate the token in admin user, not owner.
  // If you generate the token in owner user, missing_scope error will be occurred.
  //
  // You can test your token via curl:
  //   curl -X POST 'https://YOUR-SLACK-TEAM.slack.com/api/users.admin.invite' \
  //   --data 'email=EMAIL&token=TOKEN&set_active=true' \
  //   --compressed
  slacktoken: process.env.SLACK_TOKEN || 'xoxp-210587065762-210587066034-210326740945-6eb6b91e880beef6e08f56996139b30d',
  // an optional security measure - if it is set, then that token will be required to get invited.
  inviteToken: process.env.INVITE_TOKEN || null,

  locale: process.env.LOCALE || "en",
};
