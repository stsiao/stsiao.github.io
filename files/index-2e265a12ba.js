// function p(){import("data:text/javascript,")}(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&d(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function u(){const{userAgent:n}=window.navigator,{platform:i}=window.navigator;return!/Win64|WOW64|x64/.test(n)&&(i.startsWith("Win")||i==="Win32")}const f=u();f&&(document.getElementById("newVersion").style.display="none",document.getElementById("oldVersion").style.display="");function g(n){const i=location.search.match(new RegExp(`[\\?\\&]${n}=([^\\&]+)`,"i"));return i===null||i.length<=1?"":i[1]}const m={en:"",en_US:"",zh_CN:"",zh_TW:"",zh_HK:""},h={en:" ",en_US:" ",zh_CN:" ",zh_TW:" ",zh_HK:" "};let o=g("lang");o||(o="zh_CN");const s=m[o],c=h[o];

var version = "1746438017.dff7dc5";
var release = "2";
window.onload=function(){
    document.getElementById("version_id").innerHTML=version;
    document.getElementById("downloadButton").href="https://download.opensuse.org/repositories/home:/stsiao/15.6/x86_64/X11WaylandViewer-"+version+"-lp156."+release+".1.x86_64.rpm";
    document.getElementById("twdrpm").href="https://download.opensuse.org/repositories/home:/stsiao/openSUSE_Tumbleweed/x86_64/X11WaylandViewer-"+version+"-"+release+".1.x86_64.rpm";
    document.getElementById("155rpm").href="https://download.opensuse.org/repositories/home:/stsiao/15.5/x86_64/X11WaylandViewer-"+version+"-lp155."+release+".1.x86_64.rpm";
}
