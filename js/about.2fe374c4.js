(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{5795:function(t,s,i){"use strict";var a=i("7513"),e=i.n(a);e.a},7513:function(t,s,i){},d504:function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"works-wrapper",style:{backgroundImage:t.bigBg}},[i("div",{staticClass:"flex-box"},[i("div",{staticClass:"flex center"},[i("div",{staticClass:"swiper-box"},[i("swiper",{staticClass:"swiper-box",attrs:{options:t.swiperOption}},t._l(t.bannerList,function(s,a){return i("swiper-slide",{key:a,staticClass:"swiper-item"},[i("div",{staticClass:"works-list"},[i("div",{staticClass:"works-img"},[i("img",{attrs:{src:s.picUrl,alt:""}}),i("div",{staticClass:"text-area"},[i("div",{staticClass:"flex-box"},[i("div",{staticClass:"flex center"},[i("div",[i("p",[t._v("使用技術: vue、less")])])])])])])])])}),1)],1)])]),t._m(0)])},e=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"menu-box"},[i("i",{staticClass:"el-icon-caret-bottom"})])}],l=i("7212"),n=i("7d24"),r=(i("dfa4"),{name:"Home",components:{swiper:l["swiper"],swiperSlide:l["swiperSlide"]},data:function(){return{swiperOption:{spaceBetween:-5},bannerList:[],weblist:[{name:"ibg_1",picUrl:n["a"].works1[0].url},{name:"ibg_2",picUrl:n["a"].works1[1].url},{name:"ibg_3",picUrl:n["a"].works1[2].url}],flatlist:[{name:"ibg_1",picUrl:n["a"].works2[0].url}],bigBg:"url("+n["a"].bg[0].url+")",options:[{value:"1",label:"網頁作品"},{value:"2",label:"平面作品"}],workslist:""}},watch:{workslist:function(t){if(console.log(t),"1"===t)console.log(this.bannerList2),this.bannerList=this.weblist;else{if("2"!==t)return this.bannerList;this.bannerList=this.flatlist}}},mounted:function(){console.log(n["a"]),this.bannerList=this.weblist},methods:{onWorkslist:function(){console.log(this.workslist)}}}),o=r,c=(i("ec12"),i("2877")),u=Object(c["a"])(o,a,e,!1,null,null,null);s["default"]=u.exports},db95:function(t,s,i){},dfa4:function(t,s,i){},ec12:function(t,s,i){"use strict";var a=i("db95"),e=i.n(a);e.a},f820:function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"about-wrapper",style:{backgroundImage:t.bigBg}},[i("div",{staticClass:"flex-box"},[i("div",{staticClass:"flex center"},[i("div",{staticClass:"card-box"},[i("el-row",[i("el-col",{attrs:{span:24}},[i("div",{staticClass:"avatar-box"},[i("img",{attrs:{src:t.avatar}})])]),i("el-col",{attrs:{span:24}},[i("div",{staticClass:"my-name"},[t._v("Shiang")])]),i("el-col",{attrs:{span:24}},[i("div",{staticClass:"my-name"})])],1)],1)])])])},e=[],l=i("7d24"),n={name:"about",data:function(){return{bigBg:"url("+l["a"].bg[1].url+")",avatar:l["a"].other[0].url}},mounted:function(){}},r=n,o=(i("5795"),i("2877")),c=Object(o["a"])(r,a,e,!1,null,null,null);s["default"]=c.exports}}]);