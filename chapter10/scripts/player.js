function createVideoControls() {
	var vids = document.getElementsByTagName("video");
	for(var i = 0 ; i < vids.length; i++) {
		addControls( vids[i] );
	}
}

function addControls( vid ) {
	// 删除video元素原来的controls属性，从而去掉其内置的控件
	vid.removeAttribute('controls');
	
	// 创建几个DOM对象，用来充当Play/Pause按钮，并把它们都添加为video元素的子元素
	vid.height = vid.videoHeight;
	vid.width = vid.videoWidth;
	vid.parentNode.style.height = vid.videoHeight + 'px';
	vid.parentNode.style.width = vid.videoWidth + 'px';
	
	var controls = document.createElement('div');
	controls.setAttribute('class','controls');
	
	var play = document.createElement('button');
	play.setAttribute('title','Play');
	play.innerHTML = '&#x25BA;';
	
	controls.appendChild(play);
	vid.parentNode.insertBefore(controls,vid);
	
	// 给Play按钮添加一个click事件，以便单击它播放影片
	play.onclick = function() {
		if(vid.ended) {
			vid.currentTime = 0;
		}
		if(vid.paused) {
			vid.play();
		} else {
			vid.pause();
		}
	};
	
	// 利用play、pause和ended事件来修改Play按钮的状态，并在影片未暂停的情况下显示Pause按钮
	vid.addEventListener('play', function() {
		play.innerHTML = '&#x2590;&#x2590;';
		play.setAttribute('paused',true);
	},false);
	
	vid.addEventListener('pause', function() {
		play.removeAttribute('paused');
		play.innerHTML = '&#x25BA;';
	},false);
	
	vid.addEventListener('ended', function() {
		vid.pause();
	},false);
	
}

window.onload = function() {
	createVideoControls();
}