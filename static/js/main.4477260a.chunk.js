(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),r=s(3),c=s.n(r),i=s(6),l=s(4),o=s(5),d=s(8),u=s(7),b=(s(13),s(0)),h=function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).onChange=function(e){var t=e.target.value;n.setState({user_value:t}),t===n.state.words[0][0]&&n.setState({is_disabled:""})},n.onSubmit=function(){if(n.state.is_disabled.length)return"";var e=Object(i.a)(n.state.words);e.shift(),n.setState({words:e,is_disabled:"disabled",user_value:""})},n.render_content=function(){if(n.state.words.length){var e=n.state.words[0];return Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{className:"left",children:["\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c: ",n.state.words.length," \u0441\u043b\u043e\u0432"]}),Object(b.jsx)("h1",{children:"\u041f\u0435\u0440\u0435\u0432\u043e\u0434 \u0441\u043b\u043e\u0432\u0430:"}),Object(b.jsx)("h2",{children:e[1]}),Object(b.jsx)("input",{type:"text",placeholder:"\u043f\u0438\u0448\u0438\u0442\u0435 \u0442\u0443\u0442",value:n.state.user_value,onChange:n.onChange}),Object(b.jsx)("small",{children:e[2]}),Object(b.jsx)("div",{className:"btn ".concat(n.state.is_disabled),onClick:n.onSubmit,children:"\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0441\u043b\u043e\u0432\u043e"})]})}return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"\u042f\u043d, \u0442\u044b \u043c\u043e\u043b\u043e\u0434\u0435\u0446"}),Object(b.jsx)("h2",{children:"\u0442\u044b \u0441\u043c\u043e\u0433\u043b\u0430 \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u0442\u044c \u0443\u0440\u043e\u0432\u0435\u043d\u044c, \u0433\u043e\u0440\u0436\u0443\u0441\u044c \u0442\u043e\u0431\u043e\u0439, \u043d\u0430\u043f\u0438\u0448\u0438 \u043c\u043d\u0435 \u043e\u0431 \u044d\u0442\u043e\u043c"})]})},n.state={word:"",words:[["rock","\u0441\u043a\u0430\u043b\u0430","\u0440\u043e\u043a"],["annually","\u0435\u0436\u0435\u0433\u043e\u0434\u043d\u043e","\u044d\u043d\u044c\u044e\u044d\u043b\u0438"],["development of tourism","\u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0442\u0443\u0440\u0438\u0437\u043c\u0430","\u0434\u0438\u0432\u0435\u043b\u044d\u043f\u043c\u044d\u043d\u0442 \u043e\u0432 \u0442\u0443\u044d\u0440\u0438\u0437\u044d\u043c"],["summit","\u0432\u0435\u0440\u0448\u0438\u043d\u0430, \u043f\u0440\u0435\u0434\u0435\u043b, \u0432\u0435\u0440\u0445","\u0441\u0430\u043c\u0438\u0442"],["limestone","\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044f\u043a","\u043b\u0430\u0439\u043c\u0441\u0442\u043e\u0443\u043d"],["marble","\u043c\u0440\u0430\u043c\u043e\u0440","\u043c\u0430\u0431\u043b"],["legend","\u043b\u0435\u0433\u0435\u043d\u0434\u0430","\u043b\u0435\u0434\u0436\u044d\u043d\u0434"],["good luck ","\u0443\u0434\u0430\u0447\u0430","\u0433\u0443\u0434 \u043b\u0430\u043a "],["prophet","\u043f\u0440\u043e\u0440\u043e\u043a","\u043f\u0440\u043e\u0444\u0438\u0442"],["holy place","\u0441\u0432\u044f\u0442\u043e\u0435 \u043c\u0435\u0441\u0442\u043e","\u0445\u043e\u0443\u043b\u0438 \u043f\u043b\u0435\u0439\u0441"],["source","\u043a\u043b\u044e\u0447, \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a","\u0441\u043e\u0441"],["dozen","\u0434\u044e\u0436\u0438\u043d\u0430","\u0434\u0430\u0437\u043d"],["believers","\u0432\u0435\u0440\u0443\u044e\u0449\u0438\u0435","\u0431\u0438\u043b\u0438\u0432\u044d\u0437"],["mazar","\u0441\u0432\u044f\u0442\u043e\u0435 ","\u043c\u0430\u0437\u0430\u0440"],["to be bordered on","\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c","\u0442\u0443 \u0431\u0438 \u0431\u043e\u0434\u044d\u0434 \u043e\u043d"],["the state flag ","\u0433\u043e\u0441\u0443\u0434\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0444\u043b\u0430\u0433","\u0437\u044d \u0441\u0442\u0435\u0439\u0442 \u0444\u043b\u044d\u0433"],["puppet theater ","\u043a\u0443\u043a\u043e\u043b\u044c\u043d\u044b\u0439 \u0442\u0435\u0430\u0442\u0440","\u043f\u0430\u043f\u0438\u0442 \u0441\u0438\u044d\u0442\u044d "],["the biggest legislative organ","\u0412\u044b\u0441\u0448\u0438\u0439 \u0433\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u043e\u0440\u0433\u0430\u043d","\u0437\u044d \u0431\u0438\u0433\u0438\u0441\u0442 \u043b\u0435\u0434\u0436\u0438\u0441\u043b\u044d\u0442\u0438\u0432 \u043e\u0433\u044d\u043d"],["government","\u0433\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u043e","\u0433\u0430\u0432\u043d\u043c\u044d\u043d\u0442"],["executive","\u0438\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439","\u0438\u0433 \u0437\u0435\u043a\u044c\u044e\u0442\u0438\u0432"],["equal before the law","\u0432\u0441\u0435 \u0440\u0430\u0432\u043d\u044b \u043f\u0435\u0440\u0435\u0434 \u0437\u0430\u043a\u043e\u043d\u043e\u043c ","\u0438\u043a\u0443\u044d\u043b \u0431\u0438\u0444\u043e \u0437\u044d \u043b\u043e"],["to be located","\u0431\u044b\u0442\u044c \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u043c ","\u0442\u0443 \u0431\u0438 \u043b\u043e\u0443 \u043a\u0435\u0439\u0442\u0438\u0434"],["slope","\u043d\u0430\u043a\u043b\u043e\u043d-\u043e\u0442\u043a\u043e\u0441","\u0441\u043b\u043e\u0443\u043f"]].sort((function(){return.5-Math.random()})),user_value:"",is_disabled:"disabled"},n}return Object(o.a)(s,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)("div",{className:"container",children:this.render_content()})})}}]),s}(n.Component);c.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.4477260a.chunk.js.map