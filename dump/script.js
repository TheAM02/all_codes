function randNum(x) {
	return Math.floor(Math.random() * x );
}

var y = randNum(6);

if (y === 1) {
	document.getElementById('body01').style.backgroundImage = "url('https://i.imgur.com/kg7IBQA.jpg')"
}

if (y === 2) {
	document.getElementById('body01').style.backgroundImage = "url('https://i.imgur.com/sUlJF1C.png')"
}

if (y === 3) {
	document.getElementById('body01').style.backgroundImage = "url('https://i.imgur.com/nJ0gqch.jpg')"
}

if (y === 4) {
	document.getElementById('body01').style.backgroundImage = "url('https://i.imgur.com/c7YTOei.png')"
}

if (y === 5) {
	document.getElementById('body01').style.backgroundImage = "url('https://i.imgur.com/YbvBz5S.jpg')"
}