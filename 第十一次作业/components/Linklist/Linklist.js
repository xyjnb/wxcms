// Linklist/Linklist.js
Component({
  properties: {
    usite: {
      type: String,
      value: 'http://',
    },
  },

  data: {
    ItemList: [
      { "pagename": "美食食谱", "pagetext": "../recipes/recipes" },
      { "pagename": "留言本", "pagetext": "../ly/ly" },
      { "pagename": "利息计算器", "pagetext": "../lxjsq/lxjsq" },
      { "pagename": "猜字游戏", "pagetext": "../game/game" },
      { "pagename": "地图", "pagetext": "../map/map" },
      { "pagename": "选择题", "pagetext": "../myprofile/myprofile" },
      { "pagename": "系统", "pagetext": "../log/log" }
    ],
  },
  attached() {
  },
  methods: {


  }
})