window.addEventListener('load', function () {
    // ---- globals ----
    const iconPath = "./tooltip.ico";
    const color = "white";
    const hoverBackground = "rgb(0,0,0,0.5)";
    const fontSize = 12; //px
    const radius = 5; //px
    const typing = true; 
    const typingSpeed=1; // only if typing is true
    const typingLikeHuman=true;
    // -----------------


    function el(type){return document.createElement(type)}
    var tags=Array.prototype.slice.call(document.getElementsByTagName("tooltip"));
    tags.forEach(tag => {
        // ---- reshape parent ----
        var txt=tag.innerHTML;tag.innerHTML="";
        tag.style.display="block";tag.style.overflow="hidden";

        // ---- icon ----
        var wrap = el('div');wrap.style.height="90%";wrap.style.width="90%";
        wrap.style.padding="5%";wrap.style.position="relative";
        var ico = el('img');ico.style.position="relative";ico.src=iconPath;
        ico.style.display="block";ico.style.height="100%";ico.style.width="100%";

        // ---- info ----
        var info=el('span');
        tag.appendChild(info);
        var breaker=false;
        function delay(seconds){return new Promise(function(resolve){setTimeout(function(){resolve(0)}, 1000*seconds)});}
        async function hoverOrTouchEvent(e) {
            console.log(e.pageX, e.pageY)
            breaker=false;
            info.style.backgroundColor=hoverBackground;info.style.hypens="auto";
            info.style.zIndex="100";info.style.maxWidth="300px"; info.style.borderRadius=`${radius}px`;
            info.style.border=`1px solid ${color}`;info.style.position="absolute"; info.style.left=`${e.pageX}px`;
            info.style.top=`${e.pageY}px`;info.id="tooltip-info-text";
            info.style.color=color; info.style.padding="20px";info.style.fontSize=fontSize;
            info.style.transition="0.4s"; info.style.opacity="1";
            info.style.maxHeight="1000px"; info.style.overflow="hidden";
            var t=[];for(let i = 0; i < 50; i++) {t.push(Math.random());};
            if (typing) {
                info.innerHTML="";
                for (var i = 0; i < txt.length; i++) {
                    info.innerHTML+=txt.charAt(i);
                    if (typingLikeHuman){
                        await delay((.03+.2*t[i % 49])/typingSpeed);
                    } else {
                        await delay(.07/typingSpeed);
                    }
                    
                    if (breaker) {break}
                }
            } else {
                info.innerHTML=txt;
            }
        };
        // mouse down for desktop or notebook clients
        ico.onmouseover=function(e){
            hoverOrTouchEvent(e);
        };ico.onmouseout=function(e){
            info.style.opacity="0";
            breaker=true;
            //tag.removeChild(info);
        };ico.ontouchstart=function(e){
            hoverOrTouchEvent(e);
        }
        // 

        // ---- add to document ----
        wrap.appendChild(ico);
        tag.appendChild(wrap);
    });
});