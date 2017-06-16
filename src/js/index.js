require(['config'],function(){
	require(['jquery'],function($){

		$(function(){
			console.log(111)
			
					
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

		
		var $goodslist = $('.goodlist');
	
		// 请求数据
		$.ajax({
			url:'api/date.php',
			dataType:'json',

			success:function(data){

				let html =data.map(item=>{
				return `
						<div >
								<img src="${item.img}">
								<p class="title">${item.title}</p>
								<p class="price">${item.price}</p>
								<p>
									<button href="#" class="btn btn-primary btn-xs">马上抢</button>
								</p>
					</div>
				`
			}).join('');
			$goodslist.html(html);

			}

		})
			

			var $goodsList = $('.goodlist');
            var $carList = $('.cart-list ul');

            $goodsList.on('click','button',function(){
                var $currentLi = $(this).closest('div');

                var $img = $currentLi.children('img');

                var $cloneImg = $img.clone();
                $cloneImg.css({
                    position:'absolute',
                    left:$img.offset().left,
                    top:$img.offset().top,
                    width:$img.outerWidth(),
                    height:$img.outerHeight()
                }).appendTo('body');


                var $cloneLi = $currentLi.clone().css({width:195,height:310,backgroundColor:'#FFFFFF',borderBottom:'1px solid #ccc'})
                	$cloneLi.find('img').css({width:195});
                $cloneLi.find('button').remove();
                $('<span/>').addClass('btn-close').html('&times;').appendTo($cloneLi);

                $cloneImg.animate({
                    left:$carList.offset().left,
                    top:$carList.offset().top + $carList.outerHeight(),
                    width:10,
                    height:10
                },function(){
                   $cloneLi.appendTo($carList);

                   // 删除动画图片
                   $cloneImg.remove();
                });

            });


            // 删除购物车商品
            $carList.on('click','.btn-close',function(){
                var $currentLi = $(this).closest('div');
                $currentLi.remove();
            })


            var $navli = $('.navli');
            var $car = $('.cart-list')

            $navli.on('click',function(){
            		$car.addClass('.active')
            })


		




			
		})
	})
})

		
