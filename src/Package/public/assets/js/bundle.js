!function(){function t(e,i,n){function s(r,l){if(!i[r]){if(!e[r]){var h="function"==typeof require&&require;if(!l&&h)return h(r,!0);if(o)return o(r,!0);var c=new Error("Cannot find module '"+r+"'");throw c.code="MODULE_NOT_FOUND",c}var a=i[r]={exports:{}};e[r][0].call(a.exports,function(t){var i=e[r][1][t];return s(i||t)},a,a.exports,t,e,i,n)}return i[r].exports}for(var o="function"==typeof require&&require,r=0;r<n.length;r++)s(n[r]);return s}return t}()({1:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=function(){function t(){this.element=$(".js-lightbox");this.element.each(function(t,e){{var i=$(e);new s(i)}})}return t}();i.Lightbox=n;var s=function(){function t(t){this.lightbox=$(".c-lightbox"),this.element=t,this.lightbox.length&&(this.element.find(".js-lightbox__inner").on("click",this.open.bind(this)),this.src=this.element.find(".js-lightbox__inner").attr("href"),this.type=this.element.attr("data-type"),this.img="<div class='c-lightbox__imgwrapper'>\n                        <img class='c-lightbox__image' src='"+this.src+"' />\n                        <button class='c-lightbox__close'>\n                            <span class='u-accessibility'>Close</span>\n                        </button>\n                    </div>",this.videoElement="<div class='u-video c-lightbox__video'>\n                                <iframe width='560' height='315' src='"+this.src+"' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>\n                                <button class='c-lightbox__close'>\n                                    <span class='u-accessibility'>Close</span>\n                                </button>\n                            </div>")}return t.prototype.open=function(t){t.preventDefault(),this.lightbox.addClass("u-is-visible"),"video"==this.type?this.lightbox.find(".c-lightbox__inner").append(this.videoElement):"image"==this.type&&this.lightbox.find(".c-lightbox__inner").append(this.img),this.closeBtn=this.lightbox.find("button"),this.closeBtn.on("click",this.close.bind(this))},t.prototype.close=function(){this.lightbox.removeClass("u-is-visible"),$(".c-lightbox__inner").empty()},t}()},{}],2:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=function(){function t(){this.element=$(".js-LoadMore");this.element.each(function(t,e){{var i=$(e);new s(i)}})}return t}();i.LoadMore=n;var s=function(){function t(t){this.element=t,this.items=this.element.find("li"),this.text=this.element.attr("data-text"),this.items.length>2&&(this.element.append('\n                <div class="o-section-sub o-section-end u-center">\n                    <button class="c-btn c-btn--reverse c-btn--reverse-secondary js-btn" >'+this.text+"</button>\n                </div>\n            "),this.items.hide(),this.items.slice(0,2).show()),this.items.hide(),this.items.slice(0,2).show(),this.btn=this.element.find(".js-btn"),this.btn.on("click",this.more.bind(this))}return t.prototype.more=function(){this.items.filter(":hidden").slice(0,2).show(),this.items.length==this.items.filter(":visible").length&&this.btn.hide()},t}();i.LoadMoreElements=s},{}],3:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});{var n=t("./menu"),s=t("./loadMore"),o=t("./lightbox");new n.Menu,new s.LoadMore,new o.Lightbox}},{"./lightbox":1,"./loadMore":2,"./menu":4}],4:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=function(){function t(){$(".c-nav-toggle").on("click",this.toggle.bind(this)),$("main").on("click",this.destroy.bind(this)),$(window).resize(this.destroy.bind(this))}return t.prototype.toggle=function(t){t.preventDefault(),$("body").toggleClass("is-activeNav")},t.prototype.destroy=function(){$(".is-activeNav").length&&$("body").removeClass("is-activeNav")},t}();i.Menu=n},{}]},{},[3]);
//# sourceMappingURL=bundle.js.map
