require(['config'],function(){
	require(['jquery','common'],function($){

		$('<header/>').load('../html/headerandfooter/detailsheader.html',function(){
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
						location.href = 'list.html';	
					})

					var goodslist = getCookie('goodslist');
					goodslist = goodslist ? JSON.parse(goodslist) : [];
					var indx = goodslist.length;

					 if (typeof indx !='number') {
					 	indx=0
					 }

					 	$('.num').text(indx);


			},500);
			
				$('.main').on('mouseenter',function(){
					
							$(this).children('.main_nav').show()
							}).on('mouseleave',function(){
								$(this).children('.main_nav').hide()
							});

			var pageNo = 1;
			var lastPage = 1;
			$.ajax({
				url:'../api/list.php',
				dataType:'json',
				success:function(data){
					
					var res = data.slice(0,pageNo)
					console.log(res)
					let html=res.map(function(item){


							return `
								
									<img src="${item.img1}">
									<div class="listdetails">
										<div class="goods">
											<img src="${item.img2}">
											<p class="title">${item.p1}</p>
											<p class="title">${item.b1}</p>
											<p class="price">￥${item.q1}</p>
											<button>立即抢购</button>
										</div>
										<div class="goods">
											<img src="${item.img3}">
											<p class="title">${item.p2}</p>
											<p class="title">${item.b2}</p>
											<p class="price">￥${item.q2}</p>
											<button>立即抢购</button>
										</div>
										<div class="goods">
											<img src="${item.img4}">
											<p class="title">${item.p3}</p>
											<p class="title">${item.b3}</p>
											<p class="price">￥${item.q3}</p>
											<button>立即抢购</button>
										</div>
										<div class="goods">
											<img src="${item.img5}">
											<p class="title">${item.p4}</p>
											<p class="title">${item.b4}</p>
											<p class="price">￥${item.q4}</p>
											<button>立即抢购</button>
										</div>
										<div class="goods">
											<img src="${item.img6}">
											<p class="title">${item.p5}</p>
											<p class="title">${item.b5}</p>
											<p class="price">￥${item.q5}</p>
											<button>立即抢购</button>
										</div>
										<div class="goods">
											<img src="${item.img7}">
											<p class="title">${item.p6}</p>
											<p class="title">${item.b6}</p>
											<p class="price">￥${item.q6}</p>
											<button>立即抢购</button>
										</div>
										<div class="goods">
											<img src="${item.img8}">
											<p class="title">${item.p7}</p>
											<p class="title">${item.b7}</p>
											<p class="price">￥${item.q7}</p>
											<button>立即抢购</button>
										</div>
										
									</div>
								
							`
					}).join('');

					$('<div/>').addClass('list').html(html).appendTo('.mainer .container');
					pageNo++;
				}
			});

				$(window).on('scroll',function(){
					var scrollTop = $(window).scrollTop();
					var winHeight = $(window).height();
					var scrollHeight = $('html').outerHeight();



					if (scrollTop>1000) {
						$('.topp').show();
				}else if(scrollTop<1000){
					$('.topp').hide();
				}
								
					if(scrollTop >= scrollHeight - winHeight-50){
						if(pageNo == lastPage) return;
						$.ajax({
							url:'../api/list.php',
							
							dataType:'json',
							success:function(data){
								var ges = data.slice(pageNo-1,pageNo)
											let html = ges.map(item=>{
													return `
														
															<img src="${item.img1}">
															<div class="listdetails">
																<div class="goods">
																	<img src="${item.img2}">
																	<p class="title">${item.p1}</p>
																	<p class="title">${item.b1}</p>
																	<p class="price">￥${item.q1}</p>
																	<button>立即抢购</button>
																</div>
																<div class="goods">
																	<img src="${item.img3}">
																	<p class="title">${item.p2}</p>
																	<p class="title">${item.b2}</p>
																	<p class="price">￥${item.q2}</p>
																	<button>立即抢购</button>
																</div>
																<div class="goods">
																	<img src="${item.img4}">
																	<p class="title">${item.p3}</p>
																	<p class="title">${item.b3}</p>
																	<p class="price">￥${item.q3}</p>
																	<button>立即抢购</button>
																</div>
																<div class="goods">
																	<img src="${item.img5}">
																	<p class="title">${item.p4}</p>
																	<p class="title">${item.b4}</p>
																	<p class="price">￥${item.q4}</p>
																	<button>立即抢购</button>
																</div>
																<div class="goods">
																	<img src="${item.img6}">
																	<p class="title">${item.p5}</p>
																	<p class="title">${item.b5}</p>
																	<p class="price">￥${item.q5}</p>
																	<button>立即抢购</button>
																</div>
																<div class="goods">
																	<img src="${item.img7}">
																	<p class="title">${item.p6}</p>
																	<p class="title">${item.b6}</p>
																	<p class="price">￥${item.q6}</p>
																	<button>立即抢购</button>
																</div>
																<div class="goods">
																	<img src="${item.img8}">
																	<p class="title">${item.p7}</p>
																	<p class="title">${item.b7}</p>
																	<p class="price">￥${item.q7}</p>
																	<button>立即抢购</button>
																</div>
																
															</div>
														
													`
												}).join('');

							$('<div/>').addClass('list').html(html).appendTo('.mainer .container');
							
								pageNo++;
							}
						});

						// 更新lastPage
						lastPage = pageNo;
					}

				});



				//返回顶部滚动特定距离显示
		
			$('.topp').hide();
			

			$('.topp').on('click',function(){
				console.log(777)
				$('html,body').animate({scrollTop:0},200)
			})


			
		});
			
		

		
			
	})
})