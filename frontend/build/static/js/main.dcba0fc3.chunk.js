(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{26:function(e,t,a){e.exports=a(53)},31:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),l=a.n(o),c=a(10),s=(a(31),a(11)),i=a(57),u=a(58),m=(a(32),a(5)),p=function(e,t,a){var n,r=a?0:.5;n="/"===e?function(e,t){var a=new m.b({paused:!0}),n=e.querySelectorAll("div > *");return a.from(e,0,{display:"none",autoAlpha:0,delay:t}).staggerFrom(n,.375,{autoAlpha:0,x:-25,ease:m.a.easeOut},.125),a}(t,r):"/playlist"===e?function(e,t){var a=new m.b({paused:!0}),n=e.querySelector(".content"),r=e.querySelector(".content-inner"),o=e.querySelector(".track-box");return a.from(e,.025,{display:"none",autoAlpha:0,delay:t,ease:m.a.easeIn}).from(n,.125,{autoAlpha:0,y:25,ease:m.a.easeInOut}).from(r,.125,{autoAlpha:0,delay:.15,ease:m.a.easeIn}).from(o,.125,{autoAlpha:0,delay:.15,ease:m.a.easeIn}),a}(t,r):function(e,t){var a=new m.b({paused:!0}),n=e.querySelector(".content"),r=e.querySelector(".content-inner");return a.from(e,.025,{display:"none",autoAlpha:0,delay:t,ease:m.a.easeIn}).from(n,.125,{autoAlpha:0,y:25,ease:m.a.easeInOut}).from(r,.125,{autoAlpha:0,delay:.15,ease:m.a.easeIn}),a}(t,r),window.loadPromise.then((function(){return requestAnimationFrame((function(){return n.play()}))}))},h=(a(34),function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(c.c,{exact:!0,strict:!0,to:"/"},"Home"),r.a.createElement(c.c,{to:"/about"},"About"),r.a.createElement(c.c,{to:"/contact"},"Contact"),r.a.createElement(c.c,{to:"/playlist"},"Playlist"))}),f=(a(39),function(){return r.a.createElement("div",{className:"background"})}),d=(a(40),a(41),function(){return r.a.createElement("button",{className:"search-btn"},"\u25ba")}),y=function(){return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"header-1"},"Music for Everyone."),r.a.createElement("h2",{className:"header-2"},"Discover and share"),r.a.createElement("h3",{className:"header-3"},"your perfect"),r.a.createElement("h4",{className:"header-4"},"sound."),r.a.createElement(c.b,{to:"/playlist"},r.a.createElement(d,null))))},E=(a(42),function(){return r.a.createElement("div",{className:"about"},r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,"Make a Playlist!"),r.a.createElement("div",{className:"content-inner"},r.a.createElement("p",null,"Welcome to Make a Playlist, a web app that allows you to make a Spotify playlist full of your favorite songs by your favorite artist and artist genres that are similar to them! Just enter the name of the artist below and click the play button! An algorithm was created using Spotify's own API to create a playlist of songs of the desired artist as well as songs of related artist!"),r.a.createElement("p",null,"If you also love the playlist that was generated with this app, you can choose to send it to your phone! Just click the message icon in the playlist section, type in your US phone number, and click send (NOTE: Message API has been turned off for production. If you'd like to test the code out for yourself! Feel free to fork the github repo! :D )"))))}),b=(a(43),a(17)),v=function(){return r.a.createElement("div",{className:"contact"},r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,"Feel free to reach out!"),r.a.createElement("div",{className:"content-inner"},r.a.createElement("p",null,"I love to build things and am always looking for ways to improve! If you have any ideas to make the app better, any bugs, or just want to say hello! Don't be hesitant to contact me about anything! I'm always happy to chat. :D"),r.a.createElement("a",{href:"https://github.com/chris510",target:"_blank"},r.a.createElement(b.a,{className:"icon"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/trinh-christopher/",target:"_blank"},r.a.createElement(b.b,{className:"icon"})),r.a.createElement("a",{href:"https://www.chris-trinh.com/",target:"_blank"},r.a.createElement(b.c,{className:"icon"})))))},g=(a(44),a(45),a(6)),N=(a(49),a(13)),O=a.n(N),k=a(16),w=Object(n.createContext)({playlistIframe:"",playlistName:"",playlistLink:"",playlistMade:!1,isLoading:!1,setLoading:function(e){},createPlaylistIframe:function(e){}}),j=function(e){var t=e.children,a=Object(n.useState)(""),o=Object(g.a)(a,2),l=o[0],c=o[1],s=Object(n.useState)(""),i=Object(g.a)(s,2),u=i[0],m=i[1],p=Object(n.useState)(""),h=Object(g.a)(p,2),f=h[0],d=h[1],y=Object(n.useState)(!1),E=Object(g.a)(y,2),b=E[0],v=E[1],N=Object(n.useState)(!0),j=Object(g.a)(N,2),S=j[0],x=j[1],I=function(){var e=Object(k.a)(O.a.mark((function e(t){var a,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={desired_artist:t},e.next=3,fetch("https://api-make-a-playlist.herokuapp.com/playlist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 3:(n=e.sent).ok?n.json().then((function(e){console.log(e),c(e.playlist_iframe_href),m(e.playlist_name),d(e.playlist_link),setTimeout((function(){v(!0)}),1e3)})):console.log("ERROR HAS OCCURED");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(w.Provider,{value:{playlistIframe:l,playlistName:u,playlistLink:f,playlistMade:b,isLoading:S,setLoading:function(e){x(e)},createPlaylistIframe:I}},t)},S=function(){var e=Object(n.useContext)(w),t=e.createPlaylistIframe,a=e.setLoading,o=Object(n.useState)(""),l=Object(g.a)(o,2),c=l[0],s=l[1];return r.a.createElement("div",{className:"search"},r.a.createElement("input",{className:"search-bar",type:"text",placeholder:"Ex: Bruno Mars",value:c,onChange:function(e){var t=e.target.value;s(t)},required:!0}),r.a.createElement("button",{className:"search-btn",onClick:function(e){e.preventDefault(),console.log("clicked"),a(!1),console.log("api call"),t(c)}},"\u25ba"))},x=(a(51),function(){return r.a.createElement("div",{className:"spinner-overlay"},r.a.createElement("div",{className:"spinner-container"}))}),I=(a(52),Object(n.createContext)({modal:!0,showModal:function(){},hideModal:function(){}})),A=function(e){var t=e.children,a=Object(n.useState)(!1),o=Object(g.a)(a,2),l=o[0],c=o[1];return r.a.createElement(I.Provider,{value:{modal:l,showModal:function(){c(!0)},hideModal:function(){c(!1)}}},t)},P=Object(n.createContext)({phoneNumber:"",spinnerLoading:!1,showSpinner:function(){},hideSpinner:function(){},changePhoneNumber:function(e){},sendPlaylistMessage:function(e,t){}}),M=function(e){var t=e.children,a=Object(n.useState)(""),o=Object(g.a)(a,2),l=o[0],c=o[1],s=Object(n.useState)(!1),i=Object(g.a)(s,2),u=i[0],m=i[1],p=function(){m(!1)},h=function(){var e=Object(k.a)(O.a.mark((function e(t,a,n){var r,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={playlist_name:t,playlist_link:a,phone_number:(l=n,l.split("-").join(""))},e.next=3,fetch("https://api-make-a-playlist.herokuapp.com/message",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 3:(o=e.sent).ok?o.json().then((function(e){console.log(e),setTimeout((function(){p(),alert("Message Sent!")}),2e3)})):console.log("ERROR HAS OCCURED");case 5:case"end":return e.stop()}var l}),e)})));return function(t,a,n){return e.apply(this,arguments)}}();return r.a.createElement(P.Provider,{value:{phoneNumber:l,spinnerLoading:u,showSpinner:function(){m(!0)},hideSpinner:p,changePhoneNumber:function(e){c(e)},sendPlaylistMessage:h}},t)},C=function(){var e=Object(n.useContext)(w),t=e.playlistIframe,a=e.playlistMade,o=e.isLoading,l=Object(n.useContext)(I);l.modal,l.showModal;return r.a.createElement("div",{className:"playlist"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",{className:"title"},"Search Artist")),r.a.createElement("div",{className:"content-inner"},r.a.createElement(S,null),r.a.createElement("div",{className:"track-box"},o?null:r.a.createElement(x,null),r.a.createElement("iframe",{className:a?"track-playlist":" track-playlist hidden",src:t,width:"100%",height:"300",title:"Your Playlist"})))))};var _=Object(s.f)((function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement(f,null),r.a.createElement(s.a,{render:function(e){var t=e.location,a=t.pathname,n=t.key;return r.a.createElement(i.a,{component:null},r.a.createElement(u.a,{key:n,appear:!0,onEnter:function(e,t){return p(a,e,t)},onExit:function(e,t){return function(e){var t=new m.b({paused:!0});t.to(e,.15,{autoAlpha:0,ease:m.a.easeOut}),t.play()}(e)},timeout:{enter:750,exit:150}},r.a.createElement(s.c,{location:t},r.a.createElement(s.a,{exact:!0,path:"/",component:y}),r.a.createElement(s.a,{exact:!0,path:"/about",component:E}),r.a.createElement(s.a,{exact:!0,path:"/contact",component:v}),r.a.createElement(s.a,{exact:!0,path:"/playlist",component:C}))))}}))}));l.a.render(r.a.createElement(A,null,r.a.createElement(M,null,r.a.createElement(j,null,r.a.createElement(c.a,null,r.a.createElement(_,null))))),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.dcba0fc3.chunk.js.map