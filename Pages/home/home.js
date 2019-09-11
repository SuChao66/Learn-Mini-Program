// Pages/home/home.js
Page({
  data: {
    title:['裤子', '鞋子', '衣服']
  },
  handleBtnClick(){
    console.log("按钮进行了点击");
  },
  //1.手指刚触摸时事件
  handleToychStart(){
    console.log("handleToychStart")
  },
  //2.手指移动事件
  handleTouchMove(){
    console.log("handleTouchMove")
  },
  //3.手指接触结束事件
  handleTouchEnd(){
    console.log("handleTouchEnd")
  },
  //4.手指点击事件
  handleTap(){
    console.log("handleTap")
  },
  //5.手指长按事件
  handleLongPress(){
    console.log("handleLongPress")
  },
  //事件对象
  handleEventClick(event){
    console.log(event);
  },

  handleOuter(event){
    console.log(event)
  },
  handleInner(event){
    console.log(event)
  },
  handleItemClick(event){
    console.log(event)
    const dataset = event.currentTarget.dataset
    const title = dataset.item
    const index = dataset.index

    console.log(title, index)
  },

  handleCaptureView1(){
    console.log("handleCaptureView1")
  },
  handleBindView1(){
    console.log("handleBindView1")
  },

  handleCaptureView2() {
    console.log("handleCaptureView2")
  },
  handleBindView2() {
    console.log("handleBindView2")
  },

  handleCaptureView3() {
    console.log("handleCaptureView3")
  },
  handleBindView3() {
    console.log("handleBindView3")
  },
})