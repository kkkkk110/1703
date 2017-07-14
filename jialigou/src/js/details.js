require(['config'],function(){
	require(['jquery','zoom','common'],function($,s,z){

		$('<header/>').load('../html/headerandfooter/detailsheader.html',function(){
			$(this).insertBefore('.mainer');
		});

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
						location.href = 'details.html';	
					})



			},300);

			$('.main').on('mouseenter',function(){
					$('.main_nav').stop().animate(1000,function(){
							$('.main_nav').show();
					});
			}).on('mouseleave',function(){
				$('.main_nav').hide();
			})
				
					$('.goods').gdsZoom({
						width: 352,
						height: 352,
						gap:20
					});


				var goodslist = getCookie('goodslist');
					goodslist = goodslist ? JSON.parse(goodslist) : [];
			
				var btn = document.querySelector('.btn');
					btn.onclick=function(){
						var currentli = this.parentNode;
						// 获取<当前>商品的信息
						var goods = {
							imgurl:currentli.children[0].src,
							name:currentli.children[2].innerText,
							price:currentli.children[1].innerText,
							qty:1
						};

							goodslist.push(goods);
							var now = new Date();

							setCookie('goodslist',JSON.stringify(goodslist),now,'/');
					}


					$.ajax({
				url:'../api/live.php',
				dataType:'json',
				success:function(res){
					let html=res.map(function(item){
						return `
								
									<h3>新品抢先看</h3>
									<div class="liveshow">
										<img src="../${item.img1}" class="sp">
										<ul>
											<li><img src="../${item.img2}">
											<p class="title">${item.title1}</p>
											<p class="price">￥${item.price1}</p>
											</li>
											<li><img src="../${item.img3}">
											<p class="title">${item.title2}</p>
											<p class="price">￥${item.price2}</p></li>
											<li><img src="../${item.img4}">
											<p class="title">${item.title3}</p>
											<p class="price">￥${item.price3}</p>
											</li>
											<li><img src="../${item.img5}">
											<p class="title">${item.title4}</p>
											<p class="price">￥${item.price4}</p>
											</li>
											<li><img src="../${item.img6}">
											<p class="title">${item.title5}</p>
											<p class="price">￥${item.price5}</p>
											</li>
											<li><img src="../${item.img7}">
											<p class="title">${item.title6}</p>
											<p class="price">￥${item.price6}</p>
											</li>
											<li><img src="../${item.img8}">
											<p class="title">${item.title7}</p>
											<p class="price">￥${item.price7}</p>
											</li>
											<li><img src="../${item.img9}">
											<p class="title">${item.title8}</p>
											<p class="price">￥${item.price8}</p>
											</li>
										</ul>
									</div>
								

						`
					}).join('');
					var $view = $('.view');
					$('<div/>').html(html).prependTo($view);
				}
				})
					 var indx = goodslist.length;
					 if (typeof indx !='number') {
					 	indx=0
					 }

					$('.num').text(indx);
				$('.btn').on('click',function(){
					var $current = $(this).parent();
					var $img = $current.prev().children('.goods').find('img');
					$img.each(function(idx,item){
							if (item.style.display != 'none') {
								$img = item;
							}
					})
					// console.log($img);
					var $cloneimg = $($img).clone();
					var $cart = $('.search_3_1');
						$cloneimg.css({
							position:'absolute',
		                    left:$($img).offset().left,
		                    top:$($img).offset().top,
		                    width:$($img).outerWidth(),
		                    height:$($img).outerHeight(),
		                    'z-index':'-1000',
		                    display:'block'
						}).appendTo('body');

						 $cloneimg.animate({
						 	// left:100,
						 	// top:1000,
		                    left:$cart.offset().left,
		                    top:$cart.offset().top + $cart.outerHeight()-20,
		                    width:20,
		                    height:20,
		                    backgroundColor: '#CC1D00'
		                },1000,function(){

		                   // 删除动画图片
		                   $cloneimg.remove();
		                });

					indx++;
					setTimeout(function(){
						$('.num').text(indx);
					},900)
					
				})

		})
	})
})