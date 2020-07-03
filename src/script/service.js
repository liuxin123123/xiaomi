$('.question_tabh h1').each(function(index,item){
    $(this).mouseover(function (){
        $(item).addClass('active').siblings().removeClass('active');
        $('.question_tabs div').eq(index).addClass('show').siblings().removeClass('show');
    })
})


var mySwiper = new Swiper ('.swiper-container', {
  loop: true, // 循环模式选项
  
  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination',
  },
  
  // 如果需要前进后退按钮
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  // 如果需要滚动条
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})  
var mySwiper = new Swiper('.swiper-container', {
autoplay:true,
}); 
