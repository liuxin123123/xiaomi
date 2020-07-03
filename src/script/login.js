$('.banner_tabh h1').each(function (index,item){
    $(item).click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('.banner_tabs ul').eq(index).addClass('show').siblings().removeClass('show');
    })
})
//
$('.banner_tabs button').click(function(){
    var user=$('.banner_tabs input').eq(0).val();
    var pass=$('.banner_tabs input').eq(1).val();
   $.ajax({
       url:'../php/login.json',
       type:'get',
       data:'type=3',
       success:function(json){
           $.each(json,function(index,item){
            if(item.user==user&&item.pass==pass){
                alert('登录成功');
                return flase;
            }else{
                alert('账号或密码错误，请重试');
            }
           })
       }
   }) 
})