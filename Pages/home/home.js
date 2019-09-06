const app = getApp()     //getApp()获取App()产生的示例对象
console.log(app.globalData.name)

//注册一个页面
  /* 
        1.监听页面的生命周期（发送网络请求，获取服务器数据）
        2.初始化数据
        3.监听wxml中相关的事件
        4.监听其他事件
  */

Page({

  /**
   * 2.页面的初始数据
   */
  data: {
    name: 'codewhy',
    age: 18,
    students:[
      {id:110, name:'kobe',age:35},
      {id:111, name:'jams',age:33},
      {id:112, name:'curry',age:31},
      {id:113, name:'kd',age:32}
    ],
    counter: 0,
    list: []    //定义一个空数组，用来存储从服务器拿下来的数据、用来渲染到页面上
  },

  //----------------3.监听点击事件--------------------------
  handBtnClick(){
    //错误写法：界面不像vue可以实时刷新
    //this.data.counter += 1;
    
    //2.this.setData()
    this.setData({
      counter: this.data.counter + 1
    })
  },
  
  handsubtraction(){
    this.setData({
      counter: this.data.counter - 1
    })
  },

  handleGetUserInfo(event){
    console.log(event)
  },

  //----------------1.监听页面的生命周期-----------------------
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log("onload")
 /*    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success:(res) =>{
        console.log(res)
        const data = res.data.data.list
        this.setData({
          list: data
        })
      }
    }) */
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("onPullDownRefresh")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("onReachBottom")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("onShareAppMessage")
  },

  //------------------4.监听其他事件----------------------
  //监听页面滚动
  onPageScroll(obj){
    console.log(obj)
  },
  //监听下拉刷新
  onPullDownRefresh(){
    console.log("下拉刷新")
  }
})