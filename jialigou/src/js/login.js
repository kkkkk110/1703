require(['config'],function(){
	require(['jquery','common'],function($){

		$('<footer/>').load('../html/headerandfooter/spfooter.html',function(){
			$(this).insertAfter('.register')
		})

		jQuery(function($){
					var mess = getCookie('mess');
					mess = mess ? JSON.parse(mess) : [];

					if (mess.length !=0) {
						location.href = '../index.html';
					}
			$('#sub').on('click',function(){


				//用户名不能为空
				if($('#name').val() === '' ){
					alert('请输入用户名');
					return false;
				};
				//密码不能为空
				if($('#password').val() === '' ){
					alert('请输入密码');
					return false;
				};

				
				var _username = $('#name').val();
				var _password = $('#password').val();
				console.log(mess)
				

				
			$.ajax({
				//路劲基于html文
				url:'../api/login.php',
				data:{
					name:$('#name').val(),
					password:$('#password').val()
				},
				success:function(data){
					console.log(data.length)
						if(data == 'yes') {
							removeCookie('mess');
							if (mess.length == 0) {
									var	message = {
										username:_username,
										password:_password
									}
								mess.push(message)
								var now = new Date();
								now.setDate(now.getDate()+7)
								setCookie('mess',JSON.stringify(mess),now,'/');

							}
				
						location.href = '../index.html';		
							alert("登录成功");
						}else if(data == 'no'){
							alert("用户名或密码错误");
						};
							
							
						}
					})
				})
		})
			
		

		
			
	})
})