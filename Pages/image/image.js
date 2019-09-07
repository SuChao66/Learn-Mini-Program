// Pages/image/image.js
Page({
  data: {
    imagePath: ""
  },

  handlleChooseAlbum(){
    //调用系统API，选择相册中的照片还是选择拍照
    wx.chooseImage({
      success: (res) => {
        //1.取出路径
        const path = res.tempFilePaths[0]

        //2.将路径添加到data中
        this.setData({
          imagePath: path
        })
      },
    })
  },

  handleImageLoad(){
    console.log("图片加载完成")
  }
})