$(function(){
    $(".menu__icon").on('click', function(){
        if($(".menu__tabs").hasClass('menu__tabs--show')){
            $(".menu__tabs").removeClass('menu__tabs--show');
            $(".main").animate({'margin-left':'0px'},500);
            $(".menu__tabs").addClass('menu__tabs');
        }else{
            $(".menu__tabs").addClass('menu__tabs--show');
            $(".main").animate({'margin-left':'25%'},500);
        }
    });
});

$(function(){
    $(".menu__tabs li").on('click', function(){
        $(".show").removeClass('show');
        const index = $(this).index();
        $(".panels").eq(index).addClass('show');
    });
});

$(function(){
    $(".menu__tabs li").hover(function(){
        $(this).css('background-color','rgb(130, 130, 130)');
    },
    function(){
        $(this).css('background-color','rgb(245, 245, 245)');
    });
});

$(function(){
    $(".menu__icon").hover(function(){
        $(this).css('filter','brightness(200%)');
    },
    function(){
        $(this).css('filter','brightness(100%)');
    });
});