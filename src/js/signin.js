require(['config'],function(){
	require(['jquery'],function($){
		console.log(22222)
		$('#btnReg').on('click',function(){


			console.log(1111)
			$.ajax({
				url:'../api/signin.php',
				data:{
					username:$('#username').val(),
					password:$('#password').val()
				},
				success:function(res){
					console.log(res);
					if(res === 'ok'){
						alert('登录成功')
					}
				}
			});
		});
	});
});