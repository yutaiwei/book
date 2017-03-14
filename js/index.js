less.watch();
var mySwiper = new Swiper(".swiper-container",{
     direction:"vertical",
    loop:true,
    pagination : '.swiper-pagination',
    onTransitionEnd:function(swiper){
        var curIndex  = swiper.activeIndex;
        var slides  = swiper.slides;
        [].forEach.call(slides,function(item,index){
            item.id = "";
            if(index==curIndex){
                switch (index){
                    case 0:
                        item.id = 'page' + (slides.length-2);
                        break;
                    case slides.length - 1:
                        item.id = 'page1';
                        break;
                    default :
                        item.id = 'page' + index;
                }
            }
        })
    }
});

var music  = document.querySelector(".music");
var beyond = document.querySelector("#beyond");
window.setTimeout(function(){
    beyond.play();
    music.style.opacity = 1;
    music.className="music musicCur";
},1000);

music.addEventListener("click",function(){
    if(beyond.paused){
        beyond.play();
        music.className ="music musicCur";
    }else{
        beyond.pause();
        music.className = "music";
    }
},false);