require(['config'],function(){
	require(['jquery','gdszoom'],function($,gd){

		$(function(){
			console.log(111)
			var $menubox = $('.spli');
			var $ul = $('.tab');


			var $tab = $('.tab');
			var $hasul = $tab.find('li').has('ul');


			$hasul.on('mouseenter',function(){

				$(this).addClass('active');

				
				var $sonul = $(this).children('ul');
				$sonul.show();
				}).on('mouseleave',function(){
				$(this).removeClass()
				var $sonul = $(this).children('ul');
				$sonul.hide();
				})


				$menubox.on('mouseenter',function(){
					$ul.show();
												
				})
				$menubox.on('mouseleave',function(){
					$ul.hide();
							
					
				})
				$ul.on('mouseenter',function(){
					$ul.show();
				})
				$ul.on('mouseleave',function(){
					$ul.hide();
				})

				$('.goods').gdszoom({
				width:348,height:347,position:'right'
			});

			$('.smallList img').click(function(){
				$('.goods img').attr({
					'src':this.src,
					'data-big':this.src});
			});


			 	var $button = $('main .container .p3');
            	var $carList = $('.cart-list ul');
            	var $img = $('main .goods').children('img');


            	$button.on('click',function(){

	                var $cloneImg = $img.clone();

	                $cloneImg.css({
	                    position:'absolute',
	                    left:$img.offset().left,
	                    top:$img.offset().top,
	                    width:$img.outerWidth(),
	                    height:$img.outerHeight()
	                }).appendTo('body');

	                var $p = $(this).siblings('.p1').clone().css({
	                	fontSize:12
	                });

	                var $Li = $(this).parent().siblings('.goods').clone();

	                	$p.appendTo($Li);

	                	$Li.css({
	                		width:196,
	                		height:200
	                	})

	                	$Li.children('img').css({
	                		width:196,
	                		height:150
	                	})
	                
	                $('<span/>').addClass('btn-close').html('&times;').appendTo($Li);

	                $cloneImg.animate({
	                    left:$carList.offset().left,
	                    top:$carList.offset().top + $carList.outerHeight(),
	                    width:10,
	                    height:10
	                },function(){
	                   $Li.appendTo($carList);


	                   // 删除动画图片
	                   $cloneImg.remove();
	                });
	                return false;



              })

            	$carList.on('click','.btn-close',function(){
	                var $currentLi = $(this).closest('div');
	                $currentLi.remove();
            })

		})
	})
})
		
