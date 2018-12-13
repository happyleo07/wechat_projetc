//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    proList: [{
        img: '/img/bg22.png',
        title: '全国社会治安综合治理先进工作者”候选人评选投票1',
        time: '2018.12.01-2018.12.03  12:00'
      }, {
        img: '/img/bg22.png',
        title: '全国社会治安综合治理先进工作者”候选人评选投票2',
        time: '2018.12.01-2018.12.03  13:00'
      }, {
        img: '/img/bg22.png',
        title: '全国社会治安综合治理先进工作者”候选人评选投票2',
        time: '2018.12.01-2018.12.03  13:00'
      }, {
        img: '/img/bg22.png',
        title: '全国社会治安综合治理先进工作者”候选人评选投票2',
        time: '2018.12.01-2018.12.03  13:00'
      },
      {
        img: '/img/bg22.png',
        title: '全国社会治安综合治理先进工作者”候选人评选投票2',
        time: '2018.12.01-2018.12.03  13:00'
      }, {
        img: '/img/bg22.png',
        title: '全国社会治安综合治理先进工作者”候选人评选投票2',
        time: '2018.12.01-2018.12.03  13:00'
      },
      {
        img: '/img/bg22.png',
        title: '全国社会治安综合治理先进工作者”候选人评选投票2',
        time: '2018.12.01-2018.12.03  13:00'
      }, {
        img: '/img/bg22.png',
        title: '全国社会治安综合治理先进工作者”候选人评选投票2',
        time: '2018.12.01-2018.12.03  13:00'
      }
    ],
    iconSize: [20, 30, 40, 50, 60, 70],
    iconColor: [
      'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
    ],
    iconType: [
      'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (options) {
    var that = this;
    //获取系统的参数，scrollHeight数值,微信必须要设置style:height才能监听滚动事件
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          scrollHeight: parseInt(res.windowHeight) -70
        })
      }
    });
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})