(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{5795:function(s,t,i){"use strict";var a=i("7513"),e=i.n(a);e.a},7513:function(s,t,i){},d504:function(s,t,i){"use strict";i.r(t);var a=function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:"works-wrapper",style:{backgroundImage:s.bigBg}},[i("div",{staticClass:"hidden-sm-and-up"},[i("div",{staticClass:"flex-box"},[i("div",{staticClass:"flex center"},[i("div",{staticClass:"swiper-box"},[i("swiper",{staticClass:"swiper-box",attrs:{options:s.swiperOption}},s._l(s.bannerList,function(s,t){return i("swiper-slide",{key:t,staticClass:"swiper-item"},[i("div",{staticClass:"works-list"},[i("div",{staticClass:"works-img"},[i("img",{attrs:{src:s.picUrl,alt:""}}),i("div",{staticClass:"text-area"},[i("div",{staticClass:"flex-box"},[i("div",{staticClass:"flex center"},[i("div")])])])])])])}),1)],1)])]),i("div",{staticClass:"menu-box",on:{click:function(t){s.isShow=!s.isShow}}},[s._m(0)]),s._v(" --\x3e\n  ")])])},e=[function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:"flex-box"},[i("div",{staticClass:"flex center"},[i("div",[s._v("使用技術: vue、less")])])])}],n=i("7212"),l=i("7d24"),r=(i("dfa4"),{props:{isPhone:Boolean},name:"Home",components:{swiper:n["swiper"],swiperSlide:n["swiperSlide"]},data:function(){return{swiperOption:{spaceBetween:-5},bannerList:[],weblist:[{name:"ibg_1",picUrl:l["a"].works1[0].url,text:"使用技術: vue、less"},{name:"ibg_2",picUrl:l["a"].works1[1].url,text:"使用技術: vue、less、svg"},{name:"ibg_3",picUrl:l["a"].works1[2].url,text:"使用技術: vue、less"}],flatlist:[{name:"ibg_1",picUrl:l["a"].works2[0].url}],bigBg:"url("+l["a"].bg[1].url+")",isShow:!1,workslists:[{name:"網頁作品",val:0},{name:"平面作品",val:1}],showText:"網頁作品"}},mounted:function(){this.bannerList=this.weblist,console.log(this.$refs)},methods:{onWorkslist:function(s){if(0===s)this.bannerList=this.weblist,this.showText="網頁作品",this.isShow=!1;else{if(1!==s)return this.bannerList;this.bannerList=this.flatlist,this.showText="平面作品",this.isShow=!1}},onClose:function(){this.isShow=!1}}}),o=r,c=(i("ec12"),i("2877")),u=Object(c["a"])(o,a,e,!1,null,null,null);t["default"]=u.exports},db95:function(s,t,i){},dfa4:function(s,t,i){},ec12:function(s,t,i){"use strict";var a=i("db95"),e=i.n(a);e.a},f820:function(s,t,i){"use strict";i.r(t);var a=function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:"about-wrapper"},[i("div",{staticClass:"about-wrapper hidden-sm-and-up",style:{backgroundImage:s.bigBg}},[i("div",{staticClass:"flex-box"},[i("div",{staticClass:"flex center"},[i("div",{staticClass:"card-box"},[i("el-row",[i("el-col",{attrs:{span:24}},[i("div",{staticClass:"avatar-box"},[i("img",{attrs:{src:s.avatar}})])]),i("el-col",{attrs:{span:24}},[i("div",{staticClass:"my-name"},[s._v("Shiang")])]),i("el-col",{attrs:{span:24}},[i("div",{staticClass:"my-name"})])],1)],1)])])])])},e=[],n=i("7d24"),l={name:"about",data:function(){return{bigBg:"url("+n["a"].bg[1].url+")",avatar:n["a"].other[0].url}},mounted:function(){}},r=l,o=(i("5795"),i("2877")),c=Object(o["a"])(r,a,e,!1,null,null,null);t["default"]=c.exports}}]);