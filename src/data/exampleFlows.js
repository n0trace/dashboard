module.exports = {
  pokedex: {
    name: 'Airdrop Task 1',
    type: 'example',
    yaml: `!Flow
    with:
      read_only: true
      rest_api: true
      port_expose: $JINA_PORT
    pods:
      gateway: {}
      twitter登录:
        template: twitter-login
        needs: gateway
      google登录:
        template: google-login
        needs: gateway
      twitter点赞:
        template: twitter-praise
        needs: twitter登录
      google表单:
        template: google-form
        needs: google登录
      telegram机器人:
        template: telegram-robot
    `,
  }
};
