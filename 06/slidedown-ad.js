// 透過getemmentById()方法查找元素並定義元素
var banner = document.getElementById('banner_top_slide');
var bannerSmall = document.getElementById('banner-small');
var bannerBig = document.getElementById('banner-big');

setTimeout(function () {
    banner.style.display = "block"
}, 2450);
setTimeout(function () {
    banner.style.display = "none"
}, 9500);
setTimeout(function () {
    bannerSmall.style.height = "0";
    bannerBig.style.height = "400px";

}, 2500);
setTimeout(function () {
    bannerSmall.style.height = "500px";
    bannerBig.style.height = "0px";

}, 8500);