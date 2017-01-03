var Vue = require('../lib/vue.js');
var Swiper = require('../lib/swiper.js');
// var $ = require('../lib/zepto.js');
var IScroll = require('../lib/iscroll-probe.js');

new Vue({
	el: '#m-index',
	data: {
		navIndex: 0,
		nav: ['首页','新品','下厨','家居服','生活','软装','床品'],
		list: []
	},
	methods: {
	  changeTab: function(index){

	  }
	},
	mounted: function(){
	  fetch().then(response => response.json())
	  .then(res => {

	  })
	  .catch(e => console.log("Oops, error",e));
	  console.log(Vue);
	}

});