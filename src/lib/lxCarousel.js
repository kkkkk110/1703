document.addEventListener('DOMContentLoaded',function(){
			var carousel = document.querySelector('.carousel');
			var ul = carousel.children[0];
			var list = ul.children;

			var index = 0;
			var lastIndex = 0;
			
			var len = list.length;

			list[index].style.opacity = 1;

			var page = document.createElement('div');
			page.classList.add('page');

			for(var i=0;i<len;i++){
				var span = document.createElement('span');
				span.innerText = i+1;

				if(i===index){
					span.classList.add('active');
				}
				page.appendChild(span);
			}

			carousel.appendChild(page);

			page.onclick = function(e){
				e = e || window.event;
				var target = e.target || e.srcElement;

				if(target.tagName.toLowerCase() === 'span'){
					index = target.innerText - 1;

					showPic();
				}
			}


			var timer = setInterval(autoPlay,3000);

			carousel.onmouseenter = function(){
				clearInterval(timer);
			}

			carousel.onmouseleave = function(){
				timer = setInterval(autoPlay,3000);
			}


			function autoPlay(){
				index++;

				showPic();
			}

			function showPic(){
				if(index>len-1){
					index = 0;
				}

				page.children[lastIndex].classList.remove('active');
				page.children[index].classList.add('active')



				animate(list[index],{opacity:1});

				animate(list[lastIndex],{opacity:0});


				lastIndex = index;

			}
		})