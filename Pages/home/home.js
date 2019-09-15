// Pages/home/home.js
Page({
  data: {
    title:"哈哈哈"
  },
  handlePushDetail(){
    //跳转到详情页
    wx.navigateTo({
      url: '/Pages/detail/detail?title=你好啊',
    })
  }
})