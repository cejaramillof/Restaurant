"use strict";navigator.serviceWorker&&navigator.serviceWorker.register("/sw.js"),function(){function n(){$("#responsive-nav ul").toggleClass("active"),$("#menu-opener").toggleClass("glyphicon-menu-hamburger")}function e(){$("#description").addClass("fixed").removeClass("absolute"),$("#navigation").slideUp(),$("#sticky-navigation").slideDown("fast")}function t(){$("#description").removeClass("fixed").addClass("absolute"),$("#navigation").slideDown("fast"),$("#sticky-navigation").slideUp("fast")}function i(){var n=$("#description"),e=n.height();return $(window).scrollTop()>$(window).height()-3*e}var s=!1,a=0,o=$("[data-name='image-counter']").attr("content");$("#contact-form").on("submit",function(n){return n.preventDefault(),sendForm($(this)),!1}),$("#sticky-navigation").removeClass("hidden"),$("#sticky-navigation").slideUp(0),$("#menu-opener").on("click",n),$(".menu-link").on("click",n),setInterval(function(){o>a?a++:a=0,$("#gallery .inner").css({left:"-"+100*a+"%"})},4e3),$(window).scroll(function(){var n=i();n&&!s&&(s=!0,e()),!n&&s&&(s=!1,t())})}();
