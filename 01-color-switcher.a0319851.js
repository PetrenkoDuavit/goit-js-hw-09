!function(){var t=document.body,e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");e.addEventListener("click",(function(){e.disabled=!0,a=setInterval((function(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),n.addEventListener("click",(function(){e.disabled=!1,clearInterval(a)}));var a=null}();
//# sourceMappingURL=01-color-switcher.a0319851.js.map