require.config({

	urlArgs: 'v='+ Date.now(),
	paths:{
		'jquery':'../lib/jquery-3.2.1',
		'gdszoom':'../lib/jquery.gdszoom',
	},

	shim:{
		'gdszoom':['jquery'],
	}
	
})