// components/tab/tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handlerClick(e){
      const index = e.currentTarget.dataset.index;
      this.setData({
        currentIndex: index
      })
      this.triggerEvent("itemClick", {index, title: this.properties.titles[index]}, {})
    }
  },
  // externalClasses:['cpn-text']
})
