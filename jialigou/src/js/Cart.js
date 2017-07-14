require(['config'],function(){
	require(['jquery','common'],function($,S){

		$('<header/>').load('../html/headerandfooter/Cartheader.html',function(){
			$(this).insertBefore('.mainer');
		})
		$('<footer/>').load('../html/headerandfooter/spfooter.html',function(){
			$(this).insertAfter('.mainer');
		})

		jQuery(function($){

			

			setTimeout(function(){
				$('.main_nav li').on('mouseenter',function(){
							$(this).children('div.hidden').show()
							}).on('mouseleave',function(){
								$(this).children('div.hidden').hide()
							});

					var mess = getCookie('mess');
					mess = mess ? JSON.parse(mess) : [];
				//d登录成功显示样式
					console.log(mess,mess.length)
					if (mess.length !=0) {
						var $nav = $('.nav_2');
						var html=`
								<span>欢迎您：</span>
								<span>${mess[0].username}&nbsp;&nbsp;&nbsp;</span>
								<span class="exit"> 退出登录</span>
						`
						$nav.html(html);

					}
					//点击退出登录
					$('.exit').on('click',function(){

						mess.splice(0,1);
						var now = new Date()
						setCookie('mess',JSON.stringify(mess),now,'/');
						location.href = 'Cart.html';	
					})




			},300);
			
				$('.main').on('mouseenter',function(){
					
							$(this).children('.main_nav').show()
							}).on('mouseleave',function(){
								$(this).children('.main_nav').hide()
							});

			var cartlist = document.querySelector('.cartlist');

			var goodslist = getCookie('goodslist');

			goodslist = goodslist ? JSON.parse(goodslist) : [];

		//-------------
					var totalPrice = 0;


			cart()

			function cart(){
		
				
				html = goodslist.map(function(goods){
				// 计算总价
				totalPrice= goods.price
				return `<ul>
						<li class="check"><input type="checkbox" class="select"></li>
						<li><a href="details.html"><img src="${goods.imgurl}"></a></li>
						<li>${goods.name}</li>
						<li><i>￥</i><span>${goods.price}</span></li>
						<li><span class="reduce">-</span><span>${goods.qty}</span><span class="add">+</span></li>
						<li class="total"><i>￥</i><span>${ totalPrice}</span></li>
						<li><p>加入收藏夹</p><p class="delete">删除</p></li>
						</ul>
						`
						
				}).join('');

					cartlist.innerHTML = '';
					$(cartlist).html(html);
				}

			//---------------
							// console.log($('.total').children('span').html())
							var num=0;
							$('.total').each(function(idx,item){
								if ($(item).siblings('.check').children()[0].checked) {
							num+=Number($(item).children('span').html())
									}
							})
							
							$('.totalmoney1').html(num);
							$('.totalmoney2').html(num)
							
							
						//减商品价格
						$('.cartlist').on('click','.reduce',function(){
							if ($(this).next().html()>=1) {
								var  idx = $(this).next().html()-1
								$(this).next().html(idx)
								var h=Number($(this).parent().next().children('span').html());
								var to = Number($(this).parent().prev().children('span').html())
									h-=to;
									$(this).parent().next().children('span').html(h);
									//生成总的价格
									var num=0;

									$('.total').each(function(idx,item){
										if ($(item).siblings('.check').children()[0].checked) {
											num+=Number($(item).children('span').html())
										}
									})
									
									$('.totalmoney1').html(num);
									$('.totalmoney2').html(num)
							}

							

							event.preventDefault();
						})
						//加商品价格
						$('.cartlist').on('click','.add',function(){
							
								var  idx = $(this).prev().html();
									idx++;
								$(this).prev().html(idx)

								var h = Number($(this).parent().next().children('span').html())
									var to = Number($(this).parent().prev().children('span').html())
								h+=to;
									$(this).parent().next().children('span').html(h)
										//生成总的价格
										
										
									var num=0;

									$('.total').each(function(idx,item){
										if ($(item).siblings('.check').children()[0].checked) {
											num+=Number($(item).children('span').html())
										}
									})
									
									$('.totalmoney1').html(num);
									$('.totalmoney2').html(num)
							
									event.preventDefault();
							
						})

						//单个商品选择框
						$('.select').on('click',function(){
							var num=0;

									$('.total').each(function(idx,item){
										if ($(item).siblings('.check').children()[0].checked) {
											num+=Number($(item).children('span').html())
										}
									})
									
									$('.totalmoney1').html(num);
									$('.totalmoney2').html(num)
						})

						//全选框
					$('#all').on('click',function(){
						if ($('#all')[0].checked) {
							console.log(22)
							$('.select').prop('checked',true);
									var num=0;
									$('.total').each(function(idx,item){
										if ($(item).siblings('.check').children()[0].checked) {
											console.log(99)
											num+=Number($(item).children('span').html())
										}
									});
									
									$('.totalmoney1').html(num);
									$('.totalmoney2').html(num);

						}else{
							$('.select').prop('checked',false);
							num=0;
									$('.totalmoney1').html(num);
									$('.totalmoney2').html(num);
						}
					})

					//删除单个商品
				$('.cartlist').on('click','.delete',function(){
					var index= $(this).parent().parent().index();
					$(this).parent().parent().remove();
							//重新写入总价格
									var num=0;
									$('.total').each(function(idx,item){
										if ($(item).siblings('.check').children()[0].checked) {
											num+=Number($(item).children('span').html())
										}	
									})
									
									$('.totalmoney1').html(num);
									$('.totalmoney2').html(num)
						//删除cookies中的项
							goodslist.splice(index,1);

						// 重新写入cookie
						var now = new Date();
						setCookie('goodslist',JSON.stringify(goodslist),now,'/');
				})
				//清空购物车

				$('.empty').on('click',function(){
					
					$('.cartlist').children().remove();
						goodslist.splice(0);

						// 重新写入cookie
						var now = new Date();
						setCookie('goodslist',JSON.stringify(goodslist),now,'/');
				})


		});
	})
})