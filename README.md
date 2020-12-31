# tooltip

Easy-to-use embeddable and customizable html tooltip which allows the display of info text overlays during hover. Tooltips are a handsome solution for cluttered websites without the need of hard-coded html info elements. 


<img src="demo1.gif" alt="drawing" width="400"/>


<img src="demo2.gif" alt="drawing" width="400"/>


## Integration
A little script tag in your html and an `icon` or `img` is everything you need!
Place the following script in the header or source it of and adjust the global parameters to your demands. `Note:`If typing is enabled, the typing speed and randomness (human-like) of the typing is mimicked.
```html
<script>
    window.addEventListener('load', function () {
        // ---- globals ----
        const iconPath = "./tooltip.ico";
        const color = "red";
        const bordC = "red"; // border color
        const hoverBackground = "rgb(0,0,0,0.5)";
        const fontSize = 12; //px
        const radius = 5; //px
        const typing = false; 
        const typingSpeed=1; // only if typing is true
        const typingLikeHuman=false;
        // -----------------
        function el(type){return document.createElement(type)}var tags=Array.prototype.slice.call(
        document.getElementsByTagName("tooltip"));tags.forEach(tag=>{var txt=tag.innerHTML;tag//20
        .innerHTML="";tag.style.display="block";tag.style.overflow="hidden";var wrap=el('div');var
        ico=el('img');ico.style.position="relative";ico.src=iconPath;wrap.style.height="90%";wrap.
        style.width="90%";wrap.style.padding="5%";wrap.style.position="relative";ico.style.display
        ="block";ico.style.height="100%";ico.style.width="100%";function delay(seconds){return new
        Promise(function(resolve){setTimeout(function(){resolve(00)},1000*seconds)});}var info=el(
        'span');tag.appendChild(info);async function hoverOrTouchEvent(e){breaker=false;info.style
        .backgroundColor=hoverBackground;info.style.hypens="auto";info.style.maxWidth="300px";info
        .style.borderRadius=`${radius}px`;info.style.zIndex="1000";info.style.position="absolute";
        info.style.border=`1px solid ${bordC}`;info.style.left=`${e.pageX}px`;info.style.top=`${e.
        pageY}px`;info.id="tooltip-info-text";info.style.color=color;info.style.fontSize=fontSize;
        info.style.padding="20px";info.style.transition="0.40s";info.style.opacity="1";info.style.
        maxHeight="auto";info.style.overflow="hidden";const t=[];for(let i=0;i<50;i++){t.push(Math
        .random())};if(typing){info.innerHTML="";for(var i=0;i<txt.length;i++){info.innerHTML+=txt
        .charAt(i);if(typingLikeHuman){await delay((.03+.2*t[i%49])/typingSpeed)}else{await delay(
        .07/typingSpeed)}if(breaker){break}}}else{info.innerHTML=txt}};ico.onmouseover=function(e)
        {hoverOrTouchEvent(e)};ico.onmouseout=function(e){info.style.opacity="0";breaker=true};ico
        .ontouchstart=function(e){hoverOrTouchEvent(e)};wrap.appendChild(ico);tag.appendChild(wrap
        );});/*buffer_for_fixes################################# https://github.com/B0-B © 2020 */
    });
</script>
```
## Usage
Set the `tooltip` tag to a prefered place of your page
```html
<tooltip style="height:50px; width:50px">
    This is the Text that will be displayed within the tooltip during mouse hover or touch events.
</tooltip>
```