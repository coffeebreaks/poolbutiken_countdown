(this["webpackJsonppoolbutiken-countdown"]=this["webpackJsonppoolbutiken-countdown"]||[]).push([[0],{13:function(e,t,s){},14:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s(1),i=s(7),c=s.n(i),o=(s(13),s(2)),r=s(3),l=s(5),d=s(4),u=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={days:0,hours:0,minutes:0,seconds:0},n}return Object(r.a)(s,[{key:"componentWillMount",value:function(){this.getTimeUntil(this.props.deadline)}},{key:"componentDidMount",value:function(){var e=this;setInterval((function(){return e.getTimeUntil(e.props.deadline)}),1e3)}},{key:"leading0",value:function(e){return e<10?"0"+e:e}},{key:"getTimeUntil",value:function(e){var t=Date.parse(e)-Date.parse(new Date);if(t<0)this.setState({days:0,hours:0,minutes:0,seconds:0});else{var s=Math.floor(t/1e3%60),n=Math.floor(t/1e3/60%60),a=Math.floor(t/36e5%24),i=Math.floor(t/864e5);this.setState({days:i,hours:a,minutes:n,seconds:s})}}},{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{class:"countdown",children:[Object(n.jsxs)("div",{className:"part Clock-days",children:[" ",this.leading0(this.state.days)," dagar "]}),Object(n.jsxs)("div",{className:"part  Clock-hours",children:[this.leading0(this.state.hours),"  timmar"]}),Object(n.jsxs)("div",{className:"part Clock-minutes",children:[this.leading0(this.state.minutes)," minuter"]}),Object(n.jsxs)("div",{className:"part Clock-seconds",children:[this.leading0(this.state.seconds),"   sekunder"]})]})})}}]),s}(a.Component),h=s.p+"static/media/logo.29a2b83f.png",j=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={deadline:"January, 11, 2021"},n}return Object(r.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("img",{src:h}),Object(n.jsx)("div",{className:"App-title"}),Object(n.jsxs)("div",{className:"App-date",children:["H\xe4r \xf6ppnar ",Object(n.jsx)("span",{children:"Poolbutikens webbshop"})," 11 januari 2021."]}),Object(n.jsx)(u,{deadline:this.state.deadline})]})}}]),s}(a.Component);function p(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(j,{}),Object(n.jsxs)("p",{children:["Givetvis \xe4r du v\xe4lkommen att kontakta oss innan dess p\xe5 ",Object(n.jsx)("a",{href:"mailto:info@poolbutiken.se",children:" info@poolbutiken.se"})," "]})]})}c.a.render(Object(n.jsx)(p,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.c1425430.chunk.js.map