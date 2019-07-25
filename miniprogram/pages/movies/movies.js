// pages/movies/movies.js
var localData=require("../../data/movieJson.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
      moveList:[],
      no:''
     // scoreStr: 0,//评分
    
  },
  // onChange(event) {
  //   this.setData({
  //     scoreStr: event.detail
  //   });
  // },
  getMoveData:function(){
    this.setData({
      moveList: localData.moveJsonList
    })

  },
  goTo:function(e){
   
    this.setData({
      no: e.currentTarget.dataset.no
    })
    console.log(this.data.no)
    console.log(this.data.moveList[this.data.no - 1])
    var no = e.currentTarget.dataset.no
    var array = JSON.stringify(this.data.moveList[this.data.no - 1])
    console.log(no)
    console.log(array)
    wx.navigateTo({
      url: '../details/details?array='+array
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMoveData()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.getMoveData()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})