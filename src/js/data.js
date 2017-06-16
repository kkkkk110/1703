

console.log(6666)

var ajax = new XMLHttpRequest();


		ajax.onreadystatechange = function() {
			if(ajax.readyState === 4){
				var goodslist = JSON.parse(ajax.responseText);
				console.log(goodslist);

				var ul = document.createElement('ul');

				ul.innerHTML = goodslist.map((goods)=>{
					return `<img src="${goods.id}" >
							<span>"${goods.title}"</span>
							<span>"${goods.price}"</span>
							<span>"${goods.qiang}"</span>`;
				}).join('');

						document.querySelector('.carlist').appendChild(ul);
			}
		}

		// 建立连接
		ajax.open('get','http://localhost/1702/date.php',true);


		// 发送
		ajax.send();
