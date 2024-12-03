import{i as n,S as d}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function u(o){const r="32946561-6d99391fd6ee776d2dee61275",i="https://pixabay.com/api/",s=new URLSearchParams({key:r,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${i}?${s}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>e.hits).catch(e=>{console.log(e.message)})}function f({webformatURL:o,largeImageURL:r,tags:i,likes:s,views:e,comments:t,downloads:a}){return`
        <li class="gallery-item">
            <a href="${r}"><img class="gallery-image" src="${o}" alt="${i}"></a>
            <div class="gallery-info">
                <div class="gallery-info-div">
                    <p class="gallery-info-div-text">Likes</p>
                    <p class="gallery-info-div-value">${s}</p>
                </div>
                <div class="gallery-info-div">
                    <p class="gallery-info-div-text">Views</p>
                    <p class="gallery-info-div-value">${e}</p>
                </div>
                <div class="gallery-info-div">
                    <p class="gallery-info-div-text">Comments</p>
                    <p class="gallery-info-div-value">${t}</p>
                </div>
                <div class="gallery-info-div">
                    <p class="gallery-info-div-text">Downloads</p>
                    <p class="gallery-info-div-value">${a}</p>
                </div>
            </div>
        </li>
    `}const p=document.querySelector(".form"),c=document.querySelector(".gallery"),l=document.querySelector(".loader");p.addEventListener("submit",g);function g(o){o.preventDefault();const r=o.target.elements.formInput.value;if(l.classList.remove("visually-hidden"),c.innerHTML="",!r){n.show({message:"Please enter a search term.",backgroundColor:"#ef4040",position:"topRight"}),l.classList.add("visually-hidden");return}u(r).then(i=>{if(!i.length)throw new Error("Sorry, there are no images matching <br /> your search query. Please try again!");const s=i.map(t=>f(t)).join("");c.innerHTML=s,new d(".gallery a",{captionSelector:"img",captionsData:"alt",captionPosition:"bottom"}).refresh()}).catch(i=>{n.show({message:i.message,backgroundColor:"#ef4040",position:"topRight"})}).finally(()=>{l.classList.add("visually-hidden")}),o.target.reset()}
//# sourceMappingURL=index.js.map
