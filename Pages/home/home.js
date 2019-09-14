// Pages/home/home.js
Page({
  handleShowToast(){
    wx.showToast({
      title: '你好啊',
      duration: 3000,     //控制停留时间
      icon: 'loading',
      mask: true,         //蒙版效果
      success: function(){
        console.log("展示弹窗成功")
      },
      fail:function(){
        console.log("展示弹窗失败")
      },
      complete:function(){
        console.log("完成函数的调用")
      }
    })
  },

  handleShowModal(){
    wx.showModal({
      title: '我是标题',
      content: '我是内容',
      //showCancel: false,
      cancelText: "退出",
      cancelColor:'red',
      success:function(res){
        console.log(res)
        if(res.cancle){
          console.log('用户点击了取消按钮')
        }
        if(res.confirm){
          console.log('用户点击了确定按钮')
        }
      }
    })
  },

  handleShowLoading(){
    wx.showLoading({
      title: '加载',
      mask: true,
    })
    setTimeout(function(){
      //必须手动调用让loading消失
      wx.hideLoading()
    }, 2000)
  },

  handleShowActionSheeet(){
    wx.showActionSheet({
      itemList: ['相册', '拍照'],
      success: function(res){
        console.log(res)
      }
    })
  },

 //分享
  onShareAppMessage: function(options){
    return{
      title: "你好啊，李银河",
      path: "/pages/about/about"
    }
  }
})