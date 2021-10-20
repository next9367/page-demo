(function(){
 let h=$(window).height(); //先用變數獲取height的屬性值
if($(window).width()>768){
    $("#section_1,#section_2,#section_3").css('height',h);
}else{
    $("#section_1,#section_2,#section_3").css('height',h);
}

$("nav a").click(function(){     //nav a滑動速度
    event.preventDefault();
    let bt = $(this).attr("href");
    let pos=$(bt).offset();
    $("html,body").animate({scrollTop: pos.top},1000);
})
let logo =document.querySelector('.hammber');
let menu =document.querySelector('nav ul');
logo.addEventListener('click',function(){
    menu.classList.toggle('showmenu')


})


})()