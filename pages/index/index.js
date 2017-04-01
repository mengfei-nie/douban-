//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
   
  },
  tap: function () {
    wx.switchTab({
      url: '../board/board',
      complete: function (e) {
        console.log(e)
      }
    })
  },
  onLoad: function () {
    var _self = this
    // 获取当前定位
    wx.getLocation({
      type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function(res){
        console.log(res)
        var lat = res.latitude
        var lon = res.longitude
        wx.request({
          url: 'https://api.map.baidu.com/geocoder/v2/',
          data: {
            location: lat + "," + lon,
            output: "json",
            ak: "B61195334f65b9e4d02ae75d24fa2c53"
          },
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          // header: {}, // 设置请求的 header
          success: function(res){
            app.globalData.city = res.data.result.addressComponent.city
          },
          fail: function(res) {
            // fail
          },
          complete: function(res) {
            // complete
          }
        })
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
  },
  onUnload:function() {
    // 页面关闭
    wx.showLoading({
      title: '加载中',
    })
  }
})
