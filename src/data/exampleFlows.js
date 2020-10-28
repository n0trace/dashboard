module.exports = {
  pokedex: {
    name: 'All runners',
    type: 'example',
    yaml: `!Flow
    with:
      read_only: true
      rest_api: true
    pods:
      gateway: {}
      twitter登录:
        runner: twitter-login
        needs: 
          - gateway
      google登录:
        runner: google-login
        needs: 
          - gateway
      twitter点赞:
        runner: twitter-praise
        needs: 
         - twitter登录
      google表单:
        runner: google-form
        needs: 
         - google登录
      telegram机器人:
        runner: telegram-robot
        needs:
          - google表单
          - twitter点赞
    `,
  }
};
