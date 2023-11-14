var bg = ['./image/bg1.png','./image/bg2.png','./image/bg3.png']
document.querySelector("#bg1").addEventListener("click",function(){
    document.querySelector("#background_image img").src= bg[0];
})
document.querySelector("#bg2").addEventListener("click",function(){
    document.querySelector("#background_image img").src= bg[1];
})
document.querySelector("#bg3").addEventListener("click",function(){
    document.querySelector("#background_image img").src= bg[2];
})