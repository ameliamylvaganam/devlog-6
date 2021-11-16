function initMain() {
	data.posts.forEach((postInfo) => {
		var newPost = "<div id='date'>" + postInfo.date + "</div> <div id='text'>" + postInfo.text + "</div> <br><br>";
		document.getElementById('main').innerHTML = document.getElementById('main').innerHTML + newPost;
	})
}
