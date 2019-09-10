// Pages/wxml/wxml.js
Page({
  data: {
    message:"你好，小程序",
    firstname: "kobe",
    lastname: "bryant",
    age: 20,
    nowtime: new Date().toLocaleString(),
    isActive: false,
    isShow:true,
    score: 85,
    movies:['星际穿越', '盗梦空间', '大话西游'],
    nums:[
      [11, 14, 16],
      [21, 24, 26],
      [31, 34, 36],
    ]
  },
  onLoad(){
    setInterval(()=>{
      this.setData({
        nowtime: new Date().toLocaleString()
      })
    }, 1000)
  },

  handlecolor(){
    this.setData({
      isActive: !this.data.isActive
    })
  },

  handleswitchshow(){
    this.setData({
      isShow: !this.data.isShow
    })
  },
  
  handleIncrement(){
    this.setData({
      score: this.data.score + 6
    })
  }
})