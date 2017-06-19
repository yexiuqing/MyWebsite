
<!-- 属性 位置 速度 大小 方法  初始化 下落-->
var screenWidth=document.documentElement.clientWidth||document.body.clientWidth;
var screenHeight=document.documentElement.clientHeight||document.body.clientHeight;
function Leaf(){
    this.width=30;
    this.height=this.width;
    this.pos={
        left:Math.random()*(screenWidth-this.width),
        top:Math.random()*10
    };
    this.speed=5;
    //图片是叶子中的一个属性
    this.img=new Image();
//        this.img.src="img/"+(Math.floor(Math.random()*4)+1)+".png";
    this.img.src="images/snow-1.jpg";
    this.img.style.width=this.width+"px";
    this.img.style.left=this.pos.left+"px";
    this.img.style.top=this.pos.top+"px";
}
var oStarContainer=document.getElementById("star-container");
Leaf.prototype.init=function(){

    oStarContainer.appendChild(this.img);
}
Leaf.prototype.fall=function(){
//        setInterval中的this永远是window
    var _this=this;
    setTimeout(function(){
        clearInterval(_this.timer);
        _this.timer=setInterval(function(){
            /*   _this.img.style.top=_this.img.offsetTop+Math.random()*2+"px"
             clearInterval(_this.timer);*/
            if(_this.img.offsetTop >400){
                clearInterval(_this.timer);
            }else{
                _this.img.style.top=_this.img.offsetTop+_this.speed+"px";
//                    _this.img.style.top=_this.img.offsetTop+Math.random()*2+"px"

            }
        },100)
    },Math.random()*1000);

}
var aLeaf=[];
for(var i=0;i<500;i++){

    var oLeaf=new Leaf();
    oLeaf.init();
    aLeaf.push(oLeaf);
}
document.onclick=function(){
        for(var i=0;i<500;i++){
            aLeaf[i].fall();
        }
    }
        /* var oCircle=document.getElementById("circle");
         var circle="";
         circle="<div ></div>";
         oCircle.innerHTML=circle;*/
