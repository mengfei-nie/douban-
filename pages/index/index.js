//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
   
  },
  tap: function () {
    console.log(1)
    wx.switchTab({
      url: '../board/board',
      complete: function (e) {
        console.log(e)
      }
    })
  },
   onUnload:function(){
    // 页面关闭
    wx.showLoading({
      title: '加载中',
    })
  }
})
