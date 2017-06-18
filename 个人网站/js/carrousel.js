var html="";
var x=64/Math.tan(20*Math.PI/180)+20;
var oContainer=document.getElementById("container");
var count=0;
for(var i=0;i<9;i++){
    var oImg=new Image();
    oImg.onload=function(){
        count++;

        if(count==9){
            var aImg =document.getElementsByTagName("img");
            var time=900;
            for(var i=0;i<9;i++){
                time-=100;
                aImg[i].style.WebkitTransition="transform 2s ease "+time+"ms";
                aImg[i].style.WebkitTransform='rotateY('+(-i*40)+'deg) translateZ('+x+'px)';
            }
        }
    }
    oImg.src="img/"+(i+1)+".jpg";
    oContainer.appendChild(oImg);
}
var num=0;
oContainer.onclick=function(){

//            num=this.index();
    num++;
    this.style.webkitTransition="transform 1s ease ";
    this.style.WebkitTransform='rotateY('+num*40+'deg)';

}
