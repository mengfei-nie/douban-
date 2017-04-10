Page({
    data: {},
    onLoad:function(){
        wx.showNavigationBarLoading()
    },
    onShow:function(){
        // wx.hideNavigationBarLoading()
        setTimeout(function(){
            wx.hideNavigationBarLoading()
        },1000)
    }
})