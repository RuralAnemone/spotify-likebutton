// ==UserScript==
// @name         like everything in an album
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://open.spotify.com/album/*
// @updateURL    https://github.com/RuralAnemone/spotify-likebutton/releases/latest/download/script.js
// @downloadURL  https://github.com/RuralAnemone/spotify-likebutton/releases/latest/download/script.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=spotify.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var a = setInterval(()=>{
        var dropDown = document.querySelector('.SboKmDrCTZng7t4EgNoM');
        if (dropDown.querySelectorAll('li').length <= 6) {
            dropDown.innerHTML += '<li role="presentation" class="DuEPSADpSwCcO880xjUG"><button class="wC9sIed7pfp47wZbmU6m QgtQw2NJz7giDZxap2BB" role="menuitem" tabindex="-1" id="like"><span dir="auto" class="Type__TypeElement-sc-goli3j-0 hGXzYa ellipsis-one-line PDPsYDh4ntfQE3B4duUI" data-encore-id="type">like all songs</span></button></li>';
            var likeButton = dropDown.querySelectorAll('li')[6];
            var likeButtons = document.querySelectorAll('.Fm7C3gdh5Lsc9qSXrQwO.tGKwoPuvNBNK3TzCS5OH');
            likeButton.onclick = () => {
                Array.from(likeButtons).forEach(e => {
                    e.click();
                })
            }
        }
    }, 1000);
})();
