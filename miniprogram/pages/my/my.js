
Page({
  data: {
    value: 3
  },

  onChange(event) {
    this.setData({
      value: event.detail
    });
  }
});