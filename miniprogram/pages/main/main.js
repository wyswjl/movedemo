// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      {
        link: '/pages/my/my',
        url: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2561542089.webp'
      },
      {
        link: '/pages/my/my',
        url: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2560447448.webp'
      },
      {
        link: '/pages/my/my',
        url: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2561910053.webp'
      },
    ],
    indicatorDots: false,
    autoplay: true,//是否自动轮播
    interval: 3000,
    duration: 3000,
    height:0
  },
  //设置轮播容器的高度
  setContainerHeight: function (e) {
   // console.log(e)

    //图片的原始宽度
    var imgWidth = e.detail.width;


    //图片的原始高度
    var imgHeight = e.detail.height;

    //同步获取设备宽度
    var sysInfo = wx.getSystemInfoSync();
   // console.log("sysInfo:", sysInfo);

    //获取屏幕的宽度
    var screenWidth = sysInfo.screenWidth;
    var screenHeight = sysInfo.screenHeight;

    //获取屏幕和原图的比例
    var scale = screenWidth / imgWidth;

    //设置容器的高度
    this.setData({
      height: imgHeight * scale
    })
  //  console.log(this.data.height);
  },
  goIn:function(e){
   
    wx.switchTab({
      url: '../movies/movies'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.imgUrls)
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})