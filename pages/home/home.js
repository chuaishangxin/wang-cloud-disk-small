// pages/home/home.js
const app = getApp();
console.log(app.globalData.name);

Page({
  data: {
    name: '小程序',
    age: 20,
    students:[
      {"id":123, "name":"aaa", "age": 15},
      {"id":124, "name":"bbb", "age": 16},
      {"id":125, "name":"ccc", "age": 17},
      {"id":126, "name":"ddd", "age": 18},
    ],
    counter: 0,
  },
  handleAddCounter(){
    this.setData({
      counter: this.data.counter + 1 
    })
  },
  handleSubCounter(){
    this.setData({
      counter: this.data.counter - 1
    })
  },
  handleGetUserInfo(event){
    console.log(event);
    
  }
})