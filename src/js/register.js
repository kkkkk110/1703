require(['config'],function(){
	require(['jquery'],function($){
		
		$('#btnReg').on('click',function(){


			
			$.ajax({
				url:'../api/signin.php',
				data:{
					username:$('#username').val(),
					password:$('#password').val()
				},
				success:function(res){
					console.log(res);
					if(res === 'ok'){
						alert('注册成功')
					}
				}
			});
		});
	});
});