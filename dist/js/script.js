"use strict";var item,itemLenght,chooseScrollTop=document.querySelector(".choose__scroll-top"),chooseScrollBottom=document.querySelector(".choose__scroll-bottom"),chooseItems=document.querySelector(".choose__items");function hideChooseItem(){document.querySelectorAll(".choose__item").forEach(function(e){e.classList.add("_hidden")})}function showChooseItem(e,o){var t=document.querySelector(".choose__item:nth-child(".concat(e-1,")")),c=document.querySelector(".choose__item:nth-child(".concat(e,")")),i=document.querySelector(".choose__item:nth-child(".concat(e+1,")"));e<=1&&(c=document.querySelector(".choose__item:nth-child(".concat(e,")")),t=document.querySelector(".choose__item:nth-child(".concat(e+1,")")),i=document.querySelector(".choose__item:nth-child(".concat(e+2,")"))),o<=e&&(t=document.querySelector(".choose__item:nth-child(".concat(e-2,")")),i=document.querySelector(".choose__item:nth-child(".concat(e-1,")")),c=document.querySelector(".choose__item:nth-child(".concat(e,")"))),c&&(c.classList.remove("_hidden"),c.classList.add("_active")),t.classList.remove("_hidden"),t.classList.contains("_active")&&t.classList.remove("_active"),i.classList.remove("_hidden"),i.classList.contains("_active")&&i.classList.remove("_active")}chooseScrollTop&&(item=2,itemLenght=document.querySelectorAll(".choose__item").length,hideChooseItem(),showChooseItem(item,itemLenght),chooseScrollTop.addEventListener("click",function(e){--item<1&&(item=1),hideChooseItem(),showChooseItem(item,itemLenght)}),chooseScrollBottom.addEventListener("click",function(e){itemLenght<++item&&(item=itemLenght),hideChooseItem(),showChooseItem(item,itemLenght)}));