import isMobile from "is-mobile";

export const isMobilePlatform = isMobile();

export const isDesktopPlatform = !isMobilePlatform;


var u = window.navigator.userAgent;

export const isIos = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
export const isAndroid = u.indexOf('Android') > -1;
export const isWebView = /\((?:MIC|SALES|SUPPLIER);[^\)]+\)$/.test(u);



