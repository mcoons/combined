!function(){var e=document.getElementById("data-embedded").dataset.referer;function t(t){parent&&parent.postMessage(t,e)}function n(e){var n=e.target.getAttribute("data-link-to-post");if(n){var r=document.getElementById("post-"+n);if(r){var a=r.getBoundingClientRect();if(a&&a.top)return t({type:"discourse-scroll",top:a.top}),e.preventDefault(),!1}}}window.onload=function(){var e=document.querySelector("[data-embed-state]"),r="unknown",a=null;e&&(r=e.getAttribute("data-embed-state"),a=e.getAttribute("data-embed-id")),t({type:"discourse-resize",height:document.body.offsetHeight,state:r,embedId:a});var o,d=document.querySelectorAll("a[data-link-to-post]");for(o=0;o<d.length;o++)d[o].onclick=n;var l=document.querySelectorAll(".cooked a");for(o=0;o<l.length;o++)l[o].target="_blank";var u=document.querySelectorAll(".username a");for(o=0;o<u.length;o++){var i=u[o].innerHTML;i&&(u[o].innerHTML=new BreakString(i).break())}}}();
//# sourceMappingURL=https://sjc4.discourse-cdn.com/auth0/assets/embed-application-9cef8308c816fc1d83137e63d6c556c6cc2b68fe2b6e5ce16cca6766ba2c0ae4.js.map