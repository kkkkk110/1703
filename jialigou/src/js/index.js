require(['config'],function(){
	require(['jquery','carousel','common'],function(){

		$('<header/>').load('html/headerandfooter/header.html',function(){
			$(this).insertBefore('.mainer');
		});
		$('<footer/>').load('html/headerandfooter/footer.html',function(){
			$(this).insertAfter('.last');
		});

		//由于加载header异步，需等dom节点加载完成才能获取节点
		//
		
		jQuery(function($){
				$('.cha').on('click',function(){
					$('.protect').hide();
				})
					

				

					
			
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
						location.href = 'index.html';	
					})
				var goodslist = getCookie('goodslist');
					goodslist = goodslist ? JSON.parse(goodslist) : [];
					var indx = goodslist.length;

					 if (typeof indx !='number') {
					 	indx=0
					 }

					 	$('.num').text(indx);

					},300)
					$('.mainer').xluCarousel({
						imgs:['img/index/carousel1.jpg','img/index/carousel2.jpg','img/index/carousel3.jpg','img/index/carousel4.jpg','img/index/carousel5.jpg'],
						page:true,//小数字
						autoPlay:true,//是否自动播放
						index:1,//进入页面显示的图片
						duration:2000,//轮播图的时间
						buttons:false,//两边是否有按钮
						small:false,//是否生成小图
						type:'fade',//轮播的类型
						width:1300,//图片宽
						height:477//图片高
					});

					$.ajax({
						url:''
					})
		

			$.ajax({
						url:'api/index.php',
						dataType:'json',

						success:function(data){
						let html =data.map(item=>{
							return `
									<div class="goodslist">
										<h3><span>${item.b}</span>${item.p}</h3>
										<div class="list">
											<div class="listleft">
												<img src="${item.img1}">
												<img src="${item.img2}">
											</div>
											<div class="listright">
												<div class="goods">
										 			<img src="${item.img3}">
													<p class="title">${item.title1}</p>
													<p class="price">￥${item.price1}</p>
													
														<button href="#" class="btn btn-primary btn-xs">加入购物车</button>
													
										 		</div>
										 		<div class="goods">
										 			<img src="${item.img4}">
													<p class="title">${item.title2}</p>
													<p class="price">￥${item.price2}</p>
													
														<button href="#" class="btn btn-primary btn-xs">加入购物车</button>
												
										 		</div>
										 		<div class="goods">
										 			<img src="${item.img5}">
													<p class="title">${item.title3}</p>
													<p class="price">￥${item.price3}</p>
													
														<button href="#" class="btn btn-primary btn-xs">加入购物车</button>
													
										 		</div>
										 		<div class="goods">
										 			<img src="${item.img6}">
													<p class="title">${item.title4}</p>
													<p class="price">￥${item.price4}</p>
												
														<button href="#" class="btn btn-primary btn-xs">加入购物车</button>
												
										 		</div>
										 		<div class="goods">
										 			<img src="${item.img7}">
													<p class="title">${item.title5}</p>
													<p class="price">￥${item.price5}</p>
												
														<button href="#" class="btn btn-primary btn-xs">加入购物车</button>
												
										 		</div>
										 		<div class="goods">
										 			<img src="${item.img8}">
													<p class="title">${item.title6}</p>
													<p class="price">￥${item.price6}</p>
												
														<button href="#" class="btn btn-primary btn-xs">加入购物车</button>
													
										 		</div>
											</div>
										</div>
									</div> 
							`
						}).join('');
						$('.data .container').html(html)



						}

					})

			$.ajax({
				url:'api/live.php',
				dataType:'json',
				success:function(res){
					setTimeout(function(){
						let html=res.map(function(item){
							return `
									
										<h3>${item.p}</h3>
										<div class="liveshow">
											<img src="${item.img1}" class="sp">
											<div class="kuang">
											<ul>
												<li><a href="html/details.html"><img src="${item.img2}"></a>
												<p class="title">${item.title1}</p>
												<p class="price">￥${item.price1}</p>
												</li>
												<li><img src="${item.img3}">
												<p class="title">${item.title2}</p>
												<p class="price">￥${item.price2}</p></li>
												<li><img src="${item.img4}">
												<p class="title">${item.title3}</p>
												<p class="price">￥${item.price3}</p>
												</li>
												<li><img src="${item.img5}">
												<p class="title">${item.title4}</p>
												<p class="price">￥${item.price4}</p>
												</li>
												<li><img src="${item.img6}">
												<p class="title">${item.title5}</p>
												<p class="price">￥${item.price5}</p>
												</li>
												<li><img src="${item.img7}">
												<p class="title">${item.title6}</p>
												<p class="price">￥${item.price6}</p>
												</li>
												<li><img src="${item.img8}">
												<p class="title">${item.title7}</p>
												<p class="price">￥${item.price7}</p>
												</li>
												<li><img src="${item.img9}">
												<p class="title">${item.title8}</p>
												<p class="price">￥${item.price8}</p>
												</li>
											</ul>
											</div>
										</div>
									

							`
						}).join('');
						$('<div/>').addClass('live').html(html).prependTo($('.data .container'))
					},200)
					
				}
			})



			//返回顶部滚动特定距离显示
		
			$('.top').hide();
			$(window).on('scroll',function(){
				var scrollTop = $(window).scrollTop();
				if (scrollTop>1000) {
						$('.top').show();
				}else if(scrollTop<1000){
					$('.top').hide();
				}
			})

			$('.top').on('click',function(){
				$('html,body').animate({scrollTop:0},200)
			})
				var $aa;
				var $bb;
				setTimeout(function(){
					$bb = $($('.live').children('.liveshow')[0]).find('.kuang');
					
					
						 $aa = $($('.live').children('.liveshow')[0]).find('.kuang').children('ul');
						$('<span/>').addClass('left').css({
							width:20,
							height:50,
							backgroundColor:'#ccc',
							position:'absolute',
							top:100,
							left:8
						}).html('<').appendTo($bb)
						$('<span/>').addClass('right').css({
							width:30,
							height:50,
							backgroundColor:'#ccc',
							position:'absolute',
							top:100,
							right:-10
						}).html('>').appendTo($bb)

							$('.left').on('click',function(){
									$aa.animate({left:-980},300)
								})
							$('.right').on('click',function(){
									$aa.animate({left:0},300)
								})

				},500)
			

				


		})

	})
})