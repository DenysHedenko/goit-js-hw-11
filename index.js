import{a as m,S as h,i as a}from"./assets/vendor-Cq7ZUixy.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const y="53386491-b3a2590d4f5418fef9d867789",g="https://pixabay.com/api/";function p(i){const o={q:i,key:y,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:12};return m.get(g,{params:o}).then(t=>t.data).catch(t=>{throw t})}const l=document.querySelector(".gallery"),L=new h(".gallery a"),u=document.querySelector(".loader");function v(i){const o=i.map(({webformatURL:t,largeImageURL:n,tags:e,likes:r,views:s,comments:d,downloads:f})=>`
        <li class="gallery-item">
            <a href="${n}">
                <img class="gallery-image" src="${t}" alt="${e}">
            </a>
            <ul class="item-info">
                <li>Likes
                <div>${r}</div>
                </li>
                <li>Views
                <div>${s}</div>
                </li>
                <li>Comments
                <div>${d}</div>
                </li>
                <li>Downloads
                <div>${f}</div>
                </li>
            </ul>
        </li>`).join("");l.insertAdjacentHTML("beforeend",o),L.refresh()}function S(){l.innerHTML=""}function b(){u.classList.remove("hidden")}function c(){u.classList.add("hidden")}const $=document.querySelector(".form"),w=document.querySelector(".search-input");function P(i){i.preventDefault();const o=w.value.trim();if(o===""){a.error({title:"Error",message:"Please enter what you want to search"});return}S(),b(),p(o).then(t=>{if(t.hits.length===0){a.error({title:"Error",message:`Sorry, there are no images matching your search ${o}. Please try again!`});return}v(t.hits),c()}).catch(t=>{a.error({title:"Error",message:`An error occurred: ${t.message}`}),c()})}$.addEventListener("submit",P);
//# sourceMappingURL=index.js.map
