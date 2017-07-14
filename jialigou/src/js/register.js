require(['config'],function(){
	require(['jquery'],function($){

		$('<footer/>').load('../html/headerandfooter/spfooter.html',function(){
			$(this).insertAfter('.register')
		});

		jQuery(function($){
				
						

			$('#sub').on('click',function(){

						//用户名不能为空
							if($('#photo').val() === '' ){
								alert('请输入用户名');
								return false;
							};

							//密码正则
							if(!/^[^\u2E80-\u9FFF\s]{6,}$/i.test($('#password').val())){
							 	alert('密码格式不正确');
							 	return false;
							 };
							 if($('#password_confirm').val() != $('#password').val()){
							 	alert('两次输入的密码不一致');
							 	return false;
							 }
							 if(!$('#check').is(':checked')){
							 	alert('请阅读协议，并接受');
							 	return false;
							 };

			
						$.ajax({
							//路劲基于html文件
							url:'../api/register.php',
							data:{
								name:$('#photo').val(),
								password:$('#password').val()
							},
							success:function(res){
								setTimeout(function(){
											if(res == 'ok'){
									location.href = '../html/login.html';
									alert('注册成功，请登录')
									}else if(res == 'no'){
										alert('该用户已存在！')
									}
								},300)
									
							
								
							}
						})
					})
		})

		
			
	})
})