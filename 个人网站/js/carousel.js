//�ֲ�ͼ
var $dialogBox1=$(".dialog-box-1");
var $iNow=0;
var zindex=100;
$("#production-list .production-1").on("click",function(){
    zindex++;
    $dialogBox1.css('zIndex',zindex);
    $dialogBox1.show();
    $(".content").animate({
        top:"50%"
    },1000);
  /*  $(".dialog-body img").prop("src",$(this).children().attr("src"));  //$(this).find("img").attr("src")
    $iNow=$(this).index();*/
})
$dialogBox1.on("click",function(e){
    if(e.target==$dialogBox1[0]||e.target==$(".dialog-close")[0]){    //$dialogBox[0]ȡ��ԭ������
        $dialogBox1.hide();
        $(".content").stop().css("top","-249px");     //����ÿ�β�ˢ�µ��ͼƬ���ж���
    }
})

//��ת��������
var $dialogBox=$(".dialog-box-2");
$("#production-list .production-2").on("click",function(){
    zindex++;
    $dialogBox.css('zIndex',zindex);
    $dialogBox.show();
    $(".content").animate({
        top:"50%"
    },1000);
    //$(".dialog-body img").prop("src",$(this).children().attr("src"));  //$(this).find("img").attr("src")

})
$dialogBox.on("click",function(e){
    if(e.target==$dialogBox[0]||e.target==$(".dialog-close")[0]){    //$dialogBox[0]ȡ��ԭ������
        $dialogBox.hide();
        $(".content").stop().css("top","-249px");     //����ÿ�β�ˢ�µ��ͼƬ���ж���
    }
})
//��תľ��


var $dialogBox3=$(".dialog-box-3");
$("#production-list .production-3").on("click",function(){
    zindex++;
    $dialogBox3.css('zIndex',zindex);
    $dialogBox3.show();
    $(".content").animate({
        top:"50%"
    },1000);
    //$(".dialog-body img").prop("src",$(this).children().attr("src"));  //$(this).find("img").attr("src")

})
$dialogBox3.on("click",function(e){
    if(e.target==$dialogBox3[0]||e.target==$(".dialog-close")[0]){    //$dialogBox[0]ȡ��ԭ������
        $dialogBox3.hide();
        $(".content").stop().css("top","-249px");     //����ÿ�β�ˢ�µ��ͼƬ���ж���
    }
})

//Ư����ʱ��
var $dialogBox4=$(".dialog-box-4");
$("#production-list .production-4").on("click",function(){
    zindex++;
    $dialogBox4.css('zIndex',zindex);
    $dialogBox4.show();
    $(".content").animate({
        top:"50%"
    },1000);
    //$(".dialog-body img").prop("src",$(this).children().attr("src"));  //$(this).find("img").attr("src")

})
$dialogBox4.on("click",function(e){
    if(e.target==$dialogBox4[0]||e.target==$(".dialog-close")[0]){    //$dialogBox[0]ȡ��ԭ������
        $dialogBox4.hide();
        $(".content").stop().css("top","-249px");     //����ÿ�β�ˢ�µ��ͼƬ���ж���
    }
})
