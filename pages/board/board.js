// pages/board/board.js
var app = getApp()
Page({
  data:{
    loadingData: {},
    futureData: {},
    topData: {}
  },
  onLoad:function(options){
    var _self = this
    wx.setNavigationBarTitle({
      title: "榜单《电影《豆瓣"
    })
    // 正在上映
    try {
      var loadingData =  wx.getStorageSync('loadingData')
      if (loadingData) {
        console.log(11111111)
        _self.setData({
          loadingData: loadingData
        })
      } else {
        wx.request({
          url: 'https://api.douban.com/v2/movie/in_theaters',
          data: {
            start: 0,
            count: 10,
            city: app.globalData.city
          },
          method: 'POST',
          success: function(res){
            try {
                wx.setStorageSync('loadingData', res.data)
            } catch (e) {    
            }
            
            _self.setData({
              loadingData: res.data
            })
          },
          fail: function(res) {
            // fail
          },
          complete: function(res) {
            // complete
          }
        })
      }
    } catch (e) {}
    
    // 即将上映的电影
    try {
      var futureData =  wx.getStorageSync('futureData')
      if (futureData) {
        _self.setData({
          futureData: futureData
        })
      } else {
        wx.request({
          url: 'https://api.douban.com/v2/movie/coming_soon',
          data: {
            start: 0,
            count: 10,
            city: app.globalData.city
          },
          method: 'POST',
          success: function(res){
            try {
                wx.setStorageSync('futureData', res.data)
            } catch (e) {    
            }
            
            _self.setData({
              futureData: res.data
            })
          },
          fail: function(res) {
            // fail
          },
          complete: function(res) {
            // complete
          }
        })
      }
    } catch (e) {}

    // top250电影
     try {
      var topData =  wx.getStorageSync('topData')
      if (topData) {
        _self.setData({
          topData: topData
        })
      } else {
        wx.request({
          url: 'https://api.douban.com/v2/movie/top250',
          data: {
            start: 0,
            count: 10,
            city: app.globalData.city
          },
          method: 'POST',
          success: function(res){
            try {
                wx.setStorageSync('topData', res.data)
            } catch (e) {    
            }
            
            _self.setData({
              topData: res.data
            })
          },
          fail: function(res) {
            // fail
          },
          complete: function(res) {
            // complete
          }
        })
      }
    } catch (e) {}
  },
  onReady:function(){
    // 页面渲染完成
    console.log(this.data)
  },
  onShow:function(){
    // 页面显示
    setTimeout(function () {
        wx.hideLoading()
    }, 500)
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})