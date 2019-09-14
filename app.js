const TOKEN = "token"

App({
  //保存到全局
  globalData:{
    token: ""
  },

  onLaunch: function () {
    //1.先从缓存区中取出token 
    const token = wx.getStorageSync(TOKEN)

    //2.判断token是否有值
    if(token && token.length !== 0){//已经有token，验证token是否过期即可
      this.check_token(token)
    }else{//没有token,获取login
      this.login() 
    }
  },

  //登录操作
  login(){
    console.log("执行了登录操作")
    wx.login({
      //code只有5分钟的有效期
      success: (res) => {
        //1.获取code
        const code = res.code;

        //2.将code发送给我们的服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: "post",
          data: {
            code: code
          },
          success: (res) => {
            //console.log(res)
            //1.取出token 
            const token = res.data.token

            //2.将token保存在globalData中
            this.globalData.token = token

            //3.将token进行本地保存(建议同步)
            wx.setStorageSync(TOKEN, token)
          }
        })
      }
    })
  },

  //验证token
  check_token(token){
    console.log("执行了验证过程")
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: "post",
      header:{
        token: "token"
      },
      success: function(res){
        if(!res.data.errCode){
          this.globalData.token = token;
        }else{
          this.login()
        }
      },
      fail:function(err){
        console.log(err)
      }
    })
  }
})
