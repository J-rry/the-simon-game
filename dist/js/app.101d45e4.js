(function(e){function t(t){for(var i,o,l=t[0],r=t[1],u=t[2],d=0,m=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);c&&c(t);while(m.length)m.shift()();return n.push.apply(n,u||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],i=!0,l=1;l<s.length;l++){var r=s[l];0!==a[r]&&(i=!1)}i&&(n.splice(t--,1),e=o(o.s=s[0]))}return e}var i={},a={app:0},n=[];function o(t){if(i[t])return i[t].exports;var s=i[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=i,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(s,i,function(t){return e[t]}.bind(null,i));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/simon-the-game/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var c=r;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";s("85ec")},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"container"},[s("h1",{staticClass:"h1-title"},[e._v("Simon Says")]),s("div",{staticClass:"score-info"},[s("h2",{staticClass:"h2-title"},[e._v("Round: "+e._s(e.round))]),s("h4",{staticClass:"h2-title"},[e._v("Record: "+e._s(e.record))])]),e.lose?s("p",{staticClass:"simon__status invalid"},[e._v("You Lose :(")]):e.isGameDisabled&&!e.isButtonDisabled?s("p",{staticClass:"simon__status valid"},[e._v("Start the game")]):s("p",{staticClass:"simon__status"},[e._v("Good luck :)")]),s("div",{staticClass:"simon"},[s("div",{staticClass:"simon__item simon__game-place"},[s("div",{staticClass:"simon__game",on:{click:e.theGame}},[s("button",{staticClass:"game_item simon__yellow",style:e.addOpacity(e.yellowPush),attrs:{disabled:e.isGameDisabled,"data-number":"0"},on:{click:e.yellowClick}}),s("button",{staticClass:"game_item simon__blue",style:e.addOpacity(e.bluePush),attrs:{disabled:e.isGameDisabled,"data-number":"1"},on:{click:e.blueClick}}),s("button",{staticClass:"game_item simon__green",style:e.addOpacity(e.greenPush),attrs:{disabled:e.isGameDisabled,"data-number":"2"},on:{click:e.greenClick}}),s("button",{staticClass:"game_item simon__red",style:e.addOpacity(e.redPush),attrs:{disabled:e.isGameDisabled,"data-number":"3"},on:{click:e.redClick}})])]),s("div",{staticClass:"simon__item simon__interface"},[s("button",{staticClass:"simon__start",attrs:{disabled:e.isButtonDisabled},on:{click:e.startGame}},[e._v("Start")]),s("div",{staticClass:"simon__level"},[s("h3",{staticClass:"h3-title"},[e._v("Difficulty:")]),s("div",{staticClass:"simon__radio"},[s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.timeInterval,expression:"timeInterval"}],staticClass:"radio",attrs:{type:"radio",name:"difficulty",disabled:e.isButtonDisabled,value:"1500"},domProps:{checked:e._q(e.timeInterval,"1500")},on:{change:function(t){e.timeInterval="1500"}}}),s("span",{staticClass:"radio-label"},[e._v("Easy")])])]),s("div",{staticClass:"simon__radio"},[s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.timeInterval,expression:"timeInterval"}],staticClass:"radio",attrs:{type:"radio",name:"difficulty",disabled:e.isButtonDisabled,value:"1000"},domProps:{checked:e._q(e.timeInterval,"1000")},on:{change:function(t){e.timeInterval="1000"}}}),s("span",{staticClass:"radio-label"},[e._v("Normal")])])]),s("div",{staticClass:"simon__radio"},[s("label",{staticClass:"radio__container"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.timeInterval,expression:"timeInterval"}],staticClass:"radio",attrs:{type:"radio",name:"difficulty",disabled:e.isButtonDisabled,value:"400"},domProps:{checked:e._q(e.timeInterval,"400")},on:{change:function(t){e.timeInterval="400"}}}),s("span",{staticClass:"radio-label"},[e._v("Hard")])])])])])])])])},n=[],o=(s("d3b7"),s("159b"),s("99af"),new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3")),l=new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),r=new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),u=new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"),c=[3,3,3,3];o.playbackRate=c[0],l.playbackRate=c[1],r.playbackRate=c[2],u.playbackRate=c[3];var d=[.3,.3,.3,.3];o.volume=d[0],l.volume=d[1],r.volume=d[2],u.volume=d[3];var m={name:"App",data:function(){return{round:1,record:0,sequence:[],timeInterval:1e3,reloadInterval:500,timeOfFlash:300,itemNumber:0,isButtonDisabled:!1,isGameDisabled:!0,yellowPush:!1,bluePush:!1,greenPush:!1,redPush:!1,lose:!1}},methods:{startGame:function(){var e=this,t=Math.floor(4*Math.random());this.sequence.push(t),this.lose=!1,this.itemNumber=0,this.isButtonDisabled=!0,setTimeout((function(){e.isGameDisabled=!1}),this.sequence.length*this.timeInterval+this.timeOfFlash),this.sequence.forEach((function(t,s){setTimeout((function(){switch(t){case 0:e.yellowPush=!e.yellowPush,o.play(),setTimeout((function(){e.yellowPush=!e.yellowPush}),e.timeOfFlash);break;case 1:e.bluePush=!e.bluePush,l.play(),setTimeout((function(){e.bluePush=!e.bluePush}),e.timeOfFlash);break;case 2:e.greenPush=!e.greenPush,r.play(),setTimeout((function(){e.greenPush=!e.greenPush}),e.timeOfFlash);break;case 3:e.redPush=!e.redPush,u.play(),setTimeout((function(){e.redPush=!e.redPush}),e.timeOfFlash);break}}),(s+1)*e.timeInterval)}))},theGame:function(e){var t=this;if(this.sequence.length){var s=e.target.getAttribute("data-number");return s!=this.sequence[this.itemNumber]?(this.lose=!0,this.sequence=[],this.round=1,this.isGameDisabled=!0,void(this.isButtonDisabled=!1)):(this.itemNumber++,this.itemNumber>=this.sequence.length?(this.round++,this.round>this.record&&(this.record=this.round),this.isGameDisabled=!0,void setTimeout((function(){t.startGame()}),this.reloadInterval)):void 0)}},addOpacity:function(e){return"opacity: ".concat(e?"1":"0.6",";\n      ").concat(e?"":"box-shadow: none;")},yellowClick:function(){var e=this;this.yellowPush=!this.yellowPush,o.play(),setTimeout((function(){e.yellowPush=!e.yellowPush}),this.timeOfFlash/3)},blueClick:function(){var e=this;this.bluePush=!this.bluePush,l.play(),setTimeout((function(){e.bluePush=!e.bluePush}),this.timeOfFlash/3)},greenClick:function(){var e=this;this.greenPush=!this.greenPush,r.play(),setTimeout((function(){e.greenPush=!e.greenPush}),this.timeOfFlash/3)},redClick:function(){var e=this;this.redPush=!this.redPush,u.play(),setTimeout((function(){e.redPush=!e.redPush}),this.timeOfFlash/3)}},computed:{}},h=m,p=(s("034f"),s("2877")),f=Object(p["a"])(h,a,n,!1,null,null,null),b=f.exports;i["a"].config.devtools=!0,i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(b)}}).$mount("#app")},"85ec":function(e,t,s){}});
//# sourceMappingURL=app.101d45e4.js.map