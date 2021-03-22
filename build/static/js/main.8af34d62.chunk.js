(this.webpackJsonpnft=this.webpackJsonpnft||[]).push([[0],{203:function(e){e.exports=JSON.parse('[{"constant":true,"inputs":[{"name":"_interfaceID","type":"bytes4"}],"name":"supportsInterface","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"_name","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_approved","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"_owner","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"_symbol","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_operator","type":"address"},{"name":"_approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"},{"name":"_uri","type":"string"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_name","type":"string"},{"name":"_symbol","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":true,"name":"_tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_approved","type":"address"},{"indexed":true,"name":"_tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_operator","type":"address"},{"indexed":false,"name":"_approved","type":"bool"}],"name":"ApprovalForAll","type":"event"}]')},204:function(e){e.exports=JSON.parse('[{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"nft_prices","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"nftAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"},{"name":"_currentPrice","type":"uint256"}],"name":"setCurrentPrice","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"destroy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_payee","type":"address"},{"name":"_amount","type":"uint256"}],"name":"sendTo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"purchaseToken","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_recipient","type":"address"}],"name":"destroyAndSend","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_nftAddress","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"payee","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"balance","type":"uint256"}],"name":"Sent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"payer","type":"address"},{"indexed":false,"name":"tokenId","type":"uint256"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"balance","type":"uint256"}],"name":"Received","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}]')},211:function(e,t,n){},225:function(e,t){},250:function(e,t){},252:function(e,t){},331:function(e,t){},333:function(e,t){},342:function(e,t){},344:function(e,t){},369:function(e,t){},374:function(e,t){},376:function(e,t){},383:function(e,t){},396:function(e,t){},475:function(e,t,n){},477:function(e,t,n){"use strict";n.r(t);var a=n(15),s=n.n(a),u=n(200),p=n.n(u),o=(n(211),n(20)),i=n.n(o),r=n(48),l=n(104),c=n(29),y=n(105),d=n.n(y),m=function(e){return e>0},f=function(e){return e.startsWith("https://")},b="Wrong tokenId: It should be greater than 0",_=n(203),v=n(204),j=(n(475),n(11)),O=new d.a(d.a.givenProvider),x=function(){var e=new O.eth.Contract(_,"0x5C007A1d8051DFDa60B3692008b9e10731b67FDE"),t=new O.eth.Contract(v,"0x5C007A1d8051DFDa60B3692008b9e10731b67FDE"),n=Object(a.useState)(void 0),s=Object(c.a)(n,2),u=s[0],p=s[1],o=Object(a.useState)(""),y=Object(c.a)(o,2),d=y[0],x=y[1],h=Object(a.useState)(null),w=Object(c.a)(h,2),M=w[0],A=w[1],k=Object(a.useState)([]),g=Object(c.a)(k,2),I=g[0],N=g[1],S=Object(a.useState)(!1),F=Object(c.a)(S,2),C=F[0],D=F[1],T=Object(a.useState)(null),E=Object(c.a)(T,2),P=E[0],J=E[1],W=Object(a.useState)(null),B=Object(c.a)(W,2),R=B[0],U=B[1];Object(a.useEffect)((function(){window.ethereum.enable(),p(O.eth.accounts.currentProvider.selectedAddress.toLowerCase())}),[]);var L=function(){var t=Object(l.a)(i.a.mark((function t(n){var a,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),t.prev=1,N([]),D(!1),a=f(d),s=m(M),a||N((function(e){return[].concat(Object(r.a)(e),["Wrong url: It should starts with https://"])})),s||N((function(e){return[].concat(Object(r.a)(e),[b])})),u||N((function(e){return[].concat(Object(r.a)(e),["Error with contract connection"])})),!(u&&s&&a)){t.next=13;break}return t.next=12,e.methods.mint(u,M,d).send({from:u});case 12:D(!0);case 13:t.next=18;break;case 15:t.prev=15,t.t0=t.catch(1),N([t.t0.message]);case 18:case"end":return t.stop()}}),t,null,[[1,15]])})));return function(e){return t.apply(this,arguments)}}(),q=function(){var e=Object(l.a)(i.a.mark((function e(n){var a,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),e.prev=1,a=m(P),s=m(R),a||N((function(e){return[].concat(Object(r.a)(e),[b])})),s||N((function(e){return[].concat(Object(r.a)(e),["Wrong price: It should be greater than 0"])})),!(u&&a&&s)){e.next=9;break}return e.next=9,t.methods.mint(P,R).send({from:u});case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),N([e.t0.message]);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("header",{className:"App__header",children:"NFT Marketplace"}),Object(j.jsxs)("div",{className:"App__content",children:[Object(j.jsxs)("form",{className:"App__form",onSubmit:L,children:[Object(j.jsxs)("label",{className:"App__form__label",children:["TokenId:",Object(j.jsx)("input",{className:"App__form__input",type:"number",value:M,onChange:function(e){return A(+e.target.value||null)}})]}),Object(j.jsxs)("label",{className:"App__form__label",children:["Url:",Object(j.jsx)("input",{className:"App__form__input",type:"text",value:d,onChange:function(e){return x(e.target.value)}})]}),Object(j.jsx)("input",{type:"submit",className:"App__form__button",disabled:!M||!d,value:"Mint"})]}),Object(j.jsxs)("form",{className:"App__form",onSubmit:q,children:[Object(j.jsxs)("label",{className:"App__form__label",children:["TokenId:",Object(j.jsx)("input",{className:"App__form__input",type:"number",value:P,onChange:function(e){return J(+e.target.value||null)}})]}),Object(j.jsxs)("label",{className:"App__form__label",children:["Price:",Object(j.jsx)("input",{className:"App__form__input",type:"number",value:R,onChange:function(e){return U(+e.target.value||null)}})]}),Object(j.jsx)("input",{type:"submit",className:"App__form__button",disabled:!P||!R,value:"Set price"})]})]}),!!I.length&&Object(j.jsx)("div",{className:"App__errors",children:I.map((function(e){return Object(j.jsx)("div",{className:"App__errors__error",children:e},e)}))}),C&&Object(j.jsx)("div",{className:"App__done",children:"DONE"})]})};p.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))}},[[477,1,2]]]);
//# sourceMappingURL=main.8af34d62.chunk.js.map