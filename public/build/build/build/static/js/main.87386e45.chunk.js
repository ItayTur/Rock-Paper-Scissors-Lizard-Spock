(this["webpackJsonprock-paper-scissors-app"]=this["webpackJsonprock-paper-scissors-app"]||[]).push([[0],[,,function(e,c,a){e.exports={Weapon:"Weapon_Weapon__p8Cnw",Icon:"Weapon_Icon__6PCOD",Win:"Weapon_Win__3tLCh",ripple:"Weapon_ripple__1y4Gd",Paper:"Weapon_Paper__15XEw",Scissors:"Weapon_Scissors__3kaCF",Rock:"Weapon_Rock__fwvVM",Spock:"Weapon_Spock__30xI4",Lizard:"Weapon_Lizard__2tcpa",InPick:"Weapon_InPick__2EMr-",fadeIn:"Weapon_fadeIn__2aAQo"}},,,function(e,c,a){e.exports={Button:"Button_Button__2iOKw",Prime:"Button_Prime__3jBbJ",Secondary:"Button_Secondary__2VxFU",Result:"Button_Result__3f0ak",ShowRules:"Button_ShowRules__25Rwp"}},function(e,c,a){e.exports={Score:"Score_Score__18O2r",ScoreNumber:"Score_ScoreNumber__3P0lG",ScoreTitle:"Score_ScoreTitle__2j7ms"}},function(e,c,a){e.exports={Rules:"Rules_Rules__9YoW7",Title:"Rules_Title__2yrTu",RulesImage:"Rules_RulesImage__25fz-"}},,function(e,c,a){e.exports={Header:"Header_Header__QNBjd",Logo:"Header_Logo__3ajYR"}},function(e,c,a){e.exports={Weapons:"Weapons_Weapons__1G9JE",BackgroundImg:"Weapons_BackgroundImg__2V79D"}},function(e,c,a){e.exports={Result:"Result_Result__1ZBr9",appear:"Result_appear__2vrZ6",ResultTitle:"Result_ResultTitle__2XDdr"}},function(e,c,a){e.exports={Modal:"Modal_Modal__LIKf8",Close:"Modal_Close__1u72o"}},,function(e,c,a){e.exports={Pick:"Pick_Pick__2QdFf"}},function(e,c,a){e.exports={Picks:"Picks_Picks__2Jxzb"}},function(e,c,a){e.exports={Backdrop:"Backdrop_Backdrop__1cI7h"}},function(e,c,a){e.exports={Board:"Board_Board__2Xyw0"}},,,,,function(e,c,a){},,function(e,c,a){},function(e,c,a){"use strict";a.r(c);var s,t=a(3),n=a.n(t),o=a(13),r=a.n(o),i=(a(22),a(4)),l=a(1),p=["rock","paper","scissors","spock","lizard"],j=function(){var e=Math.floor(Math.random()*p.length);return p[e]},u=function(e,c){return"".concat(e," win ").concat(c)},d=(s={},Object(l.a)(s,u("rock","paper"),!1),Object(l.a)(s,u("rock","scissors"),!0),Object(l.a)(s,u("rock","lizard"),!0),Object(l.a)(s,u("rock","spock"),!1),Object(l.a)(s,u("paper","rock"),!0),Object(l.a)(s,u("paper","scissors"),!1),Object(l.a)(s,u("paper","lizard"),!1),Object(l.a)(s,u("paper","spock"),!0),Object(l.a)(s,u("scissors","rock"),!1),Object(l.a)(s,u("scissors","paper"),!0),Object(l.a)(s,u("scissors","lizard"),!0),Object(l.a)(s,u("scissors","spock"),!1),Object(l.a)(s,u("spock","scissors"),!0),Object(l.a)(s,u("spock","paper"),!1),Object(l.a)(s,u("spock","rock"),!0),Object(l.a)(s,u("spock","lizard"),!1),Object(l.a)(s,u("lizard","scissors"),!1),Object(l.a)(s,u("lizard","paper"),!0),Object(l.a)(s,u("lizard","rock"),!1),Object(l.a)(s,u("lizard","spock"),!0),s),_=a(6),b=a.n(_),O=a(0),m=function(e){var c=e.score;return Object(O.jsxs)("div",{className:b.a.Score,children:[Object(O.jsx)("span",{className:b.a.ScoreTitle,children:"Score"}),Object(O.jsx)("span",{className:b.a.ScoreNumber,children:c})]})},k=a.p+"static/media/logo-bonus.9bf8aeb8.svg",x=a(9),f=a.n(x),g=function(e){var c=e.score;return Object(O.jsxs)("div",{className:f.a.Header,children:[Object(O.jsx)("img",{className:f.a.Logo,src:k,alt:"game logo"}),Object(O.jsx)(m,{score:c})]})},h=a.p+"static/media/icon-paper.8b57a6b1.svg",v=a.p+"static/media/icon-rock.476e90a9.svg",S=a.p+"static/media/icon-scissors.3b1a5d7e.svg",N=a.p+"static/media/icon-lizard.0f83914c.svg",W=a.p+"static/media/icon-spock.f4d7eee8.svg",C=a(2),R=a.n(C),w={paper:{className:"".concat(R.a.Weapon," ").concat(R.a.Paper),imgSrc:h,alt:"paper"},rock:{className:"".concat(R.a.Weapon," ").concat(R.a.Rock),imgSrc:v,alt:"rock"},scissors:{className:"".concat(R.a.Weapon," ").concat(R.a.Scissors),imgSrc:S,alt:"scissors"},lizard:{className:"".concat(R.a.Weapon," ").concat(R.a.Lizard),imgSrc:N,alt:"lizard"},spock:{className:"".concat(R.a.Weapon," ").concat(R.a.Spock),imgSrc:W,alt:"spock"}},P=function(e){var c=e.id,a=e.onClick,s=e.className,t=e.win,n=w[c],o=n.className,r=n.imgSrc,i=n.alt,l=[o,R.a[s]];return t&&l.push(R.a.Win),Object(O.jsx)("button",{onClick:function(){return a&&a(c)},className:l.join(" "),children:Object(O.jsx)("img",{className:R.a.Icon,src:r,alt:i})})},I=a.p+"static/media/bg-pentagon.1ad6d365.svg",B=a(10),z=a.n(B),y=function(e){var c=e.onWeaponChoice;return Object(O.jsxs)("div",{className:z.a.Weapons,children:[Object(O.jsx)("img",{className:z.a.BackgroundImg,src:I}),Object(O.jsx)(P,{onClick:c,id:"paper"}),Object(O.jsx)(P,{onClick:c,id:"scissors"}),Object(O.jsx)(P,{onClick:c,id:"rock"}),Object(O.jsx)(P,{onClick:c,id:"lizard"}),Object(O.jsx)(P,{onClick:c,id:"spock"})]})},L=a(14),T=a.n(L),E=function(e){var c=e.title,a=e.weapon,s=e.win;return Object(O.jsxs)("div",{className:T.a.Pick,children:[Object(O.jsx)("span",{children:c}),Object(O.jsx)(P,{id:a,className:"InPick",win:s})]})},M=a(5),A=a.n(M),F=function(e){var c=e.onClick,a=e.text,s=e.secondary,t=void 0!==s&&s,n=e.className,o=void 0===n?"":n,r=[A.a.Button,A.a[o]];return t?r.push(A.a.Secondary):r.push(A.a.Prime),Object(O.jsx)("button",{onClick:c,className:r.join(" "),children:a})},Y=a(11),H=a.n(Y),U=function(e){var c=e.win,a=e.onPlayAgain,s=c?"YOU WIN":"YOU LOSE";return Object(O.jsxs)("div",{className:H.a.Result,children:[Object(O.jsx)("span",{className:H.a.ResultTitle,children:s}),Object(O.jsx)(F,{onClick:a,text:"PLAY AGAIN",className:"Result"})]})},D=a(15),J=a.n(D),G=function(e){var c=e.playerWeapon,a=e.computerWeapon,s=e.win,t=e.onPlayAgain;return Object(O.jsxs)("div",{className:J.a.Picks,children:[Object(O.jsx)(E,{title:"YOU PICKED",weapon:c,win:s}),Object(O.jsx)(U,{win:s,onPlayAgain:t}),Object(O.jsx)(E,{title:"THE HOUSE PICKED",weapon:a,win:!s})]})},K=a(12),Q=a.n(K),V=a(16),X=a.n(V),Z=function(e){var c=e.showing,a=e.onClick;return c?Object(O.jsx)("div",{className:X.a.Backdrop,onClick:a}):null},q=a.p+"static/media/icon-close.bde602ec.svg",$=function(e){var c=e.showing,a=e.onCancel,s=e.children;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(Z,{showing:c,onClick:a}),Object(O.jsxs)("div",{className:Q.a.Modal,style:{transform:c?"translateY(0)":"translateY(-100vh)",opacity:c?"1":"0"},children:[s,Object(O.jsx)("button",{className:Q.a.Close,onClick:a,children:Object(O.jsx)("img",{src:q,alt:"close"})})]})]})},ee=a.p+"static/media/image-rules-bonus.ca590b33.svg",ce=a(7),ae=a.n(ce),se=function(){return Object(O.jsxs)("div",{className:ae.a.Rules,children:[Object(O.jsx)("h3",{className:ae.a.Title,children:"RULES"}),Object(O.jsx)("img",{className:ae.a.RulesImage,src:ee,alt:"rules"})]})},te=a(17),ne=a.n(te),oe=function(){var e=Object(t.useState)(""),c=Object(i.a)(e,2),a=c[0],s=c[1],n=Object(t.useState)(""),o=Object(i.a)(n,2),r=o[0],l=o[1],p=Object(t.useState)(""),_=Object(i.a)(p,2),b=_[0],m=_[1],k=Object(t.useState)(!1),x=Object(i.a)(k,2),f=x[0],h=x[1],v=Object(t.useState)(!1),S=Object(i.a)(v,2),N=S[0],W=S[1],C=Object(t.useState)(!1),R=Object(i.a)(C,2),w=R[0],P=R[1];Object(t.useEffect)((function(){var e=localStorage.getItem("score");e&&s(e)}),[]);var I=N?Object(O.jsx)(G,{onPlayAgain:function(){W(!1)},win:f,playerWeapon:r,computerWeapon:b}):Object(O.jsx)(y,{onWeaponChoice:function(e){for(var c=j();c===e;)c=j();l(e),m(c);var a=function(e,c){var a=u(e,c);return d[a]}(e,c);h(a),setTimeout((function(){return s((function(e){var c=a?++e:0!==e?--e:0;return localStorage.setItem("score",c),c}))}),3e3),W(!0)}});return Object(O.jsxs)("div",{className:ne.a.Board,children:[Object(O.jsx)(g,{score:a}),I,Object(O.jsx)(F,{text:"RULES",secondary:!0,onClick:function(){P(!0)},className:"ShowRules"}),Object(O.jsx)($,{showing:w,onCancel:function(){P(!1)},children:Object(O.jsx)(se,{})})]})};a(24);var re=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(oe,{})})},ie=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,26)).then((function(c){var a=c.getCLS,s=c.getFID,t=c.getFCP,n=c.getLCP,o=c.getTTFB;a(e),s(e),t(e),n(e),o(e)}))};r.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(re,{})}),document.getElementById("root")),ie()}],[[25,1,2]]]);
//# sourceMappingURL=main.87386e45.chunk.js.map