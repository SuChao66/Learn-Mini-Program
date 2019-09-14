import request from "../../service/network.js"

// Pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //1.原生的方式发送网络请求
    this.get_data_origin()

    //2.使用封装的request发送网络请求
    //使用promise最大的好处就是防止出现回调地狱
    request({
      url: "http://123.207.32.32:8000/recommend"
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },

  get_data_origin(){
    //发送网络请求
    //1.发送最基本的请求
    /*   wx.request({
        url: 'http://123.207.32.32:8000/recommend',
        success: function(res){
          console.log(res);
        }
      }) */

    //2.发送get请求，但是携带参数
    /*  wx.request({
       url: "http://123.207.32.32:8000/home/data",
       data:{
         type: "sell",
         page: 1
       },
       success: function(res){
         console.log(res)
       }
     }) */

    //3.post请求，并且携带参数
    /* wx.request({
      url: "http://httpbin.org/post",
      method: "post",
      data: {
        name: "codewhy",
        age: 18
      },
      success: function (res) {
        console.log(res)
      },
      fail: function (err) {
        console.log(err)
      }
    }) */
  }
})