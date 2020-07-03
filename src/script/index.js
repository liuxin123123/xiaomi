$('.select_tabh li').each(function (index,item){
    $(item).mouseover(function (){
        $('.select_tabs .tabs_box:lt(8)').eq(index).addClass('select_show').siblings().removeClass('select_show');
        $('.select_tabs').animate({height:"230px",border_bottom:"1px #E0E0E0 solid"});
    })
})
$('.select_tabs').mouseout(function (){
    $(this).animate({height:"0px"});
})
//

$('.banner_tabh li').each(function (index,item){
    $(item).mouseover(function(){
        $('.banner_tabs .banner_content').eq(index).addClass('banner_show').siblings().removeClass('banner_show');
        $('.banner_tabs').animate({width:"992px"});
    })
})
$('.banner_tabs').mouseout(function (){
    $(this).animate({width:"0px"});
})

//

function myAjax(php1,url1){
    $.ajax({
        url:`../php/select${php1}.json`,
        type:'get',
        data:'type=3',
        dataType:'json',
        success:function(json){
            $.each(json,function (index,item){
                var selectDom=
                `
                <div>
                    <img src=${item.url} alt="">
                    <h1>${item.h1}</h1>
                    <h2>${item.h2}</h2>
                </div>
                `;
                $('.select_tabs').find('.tabs_box').eq(url1).append(selectDom);
            })
        }
    })
}
myAjax(1,0);
myAjax(2,1);
myAjax(3,2);
myAjax(4,3);
myAjax(1,4);
myAjax(2,5);
myAjax(3,6);

    $.ajax({
        url:`../php/phone.json`,
        type:'get',
        data:'type=3',
        dataType:'json',
        success:function(json){
            $.each(json,function (index,item){
                var selectDom=
                `
                <div>
                    <img src=${item.url} alt="">
                    <h1>${item.h1}</h1>
                    <h2>${item.h2}</h2>
                    <span>${item.span}</span>
                </div>
                `;
                $('.phone_wrap .phone_box').append(selectDom);
            })
        }
    })

    $.ajax({
        url:`../php/jiadian.json`,
        type:'get',
        data:'type=3',
        dataType:'json',
        success:function(json){
            $.each(json,function (index,item){
                var selectDom=
                `
                <div>
                    <img src=${item.url} alt="">
                    <h1>${item.h1}</h1>
                    <h2>${item.h2}</h2>
                    <span>${item.span}</span>
                </div>
                `;
                $('.jiadian_wrap .jiadian_box').append(selectDom);
            })
        }
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
  aotoplay:{
      delay:3000
  }
})  