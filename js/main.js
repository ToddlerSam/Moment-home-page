// DOM ELEMENTS
const time = document.getElementById('time'),
	greeting = document.getElementById('greeting'),
	name = document.getElementById('name'),
	focus = document.getElementById('focus');


//SHOW TIME
function showTime(){
	let today = new Date(),
		hour = today.getHours(),
		min = today.getMinutes(),
		sec = today.getSeconds();

	//set AM or PM
	const ampm = hour >=12 ? 'PM' : 'AM';
	let showAmPm = true;
	//12hr Format
	hour = hour %12 || 12;

	//Output time
	time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? ampm : ''}`;	
	setTimeout(showTime,1000);
}

//Add Zeroes
function addZero(n) {
	return (parseInt(n,10) < 10 ? '0':'') + n;
}

//set background and greeting
function setBackground(){
	let today = new Date(),
		hour = today.getHours();
	if(hour < 12) {
		document.body.style.backgroundImage = "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
		greeting.textContent = 'Good Morning';
	} else if(hour<18) {
		document.body.style.backgroundImage = "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
		greeting.textContent = 'Good Afternoon';
	} else {
		document.body.style.backgroundImage = "url('https://i.ibb.co/924T2Wv/night.jpg')";
		greeting.textContent = 'Good Evening';
		document.body.style.color = 'white';
	}
}
//setname
function setName(e){
	if(e.type === 'keypress'){
		//to verify enter
		if(e.keyCode == 13 && e.target.innerText != ''){
			let str = ""+e.target.innerText;
			name.textContent = str.replace(/\[|\]/g,'');
			localStorage.setItem('name',name.textContent);
			name.blur();	
		}
	} else if (e.type === 'blur') {
		if(e.target.innerText != ''){
			let str = ""+e.target.innerText;
			name.textContent = str.replace(/\[|\]/g,'');
			localStorage.setItem('name',name.textContent);
		}
		getName();
	}	
}

function setFocus(e){
	if(e.type === 'keypress'){
		//to verify enter
		if(e.keyCode == 13 && e.target.innerText != ''){
			let str = ""+e.target.innerText;
			focus.textContent = str.replace(/\[|\]/g,'');
			localStorage.setItem('focus',focus.textContent);
			focus.blur();	
		}
	} else if (e.type === 'blur') {
		if(e.target.innerText != ''){
			let str = ""+e.target.innerText;
			focus.textContent = str.replace(/\[|\]/g,'');
			localStorage.setItem('focus',focus.textContent);
		}
		getFocus();		
	}
}

//getname
function getName(){
	if(localStorage.getItem('name') === null || name.textContent == ' ' || name.textContent == ''){
		name.textContent = '[Enter Name]';
	} else {
		name.textContent = localStorage.getItem('name');
	}
}
function setNameInitial(e){
	if(name.textContent == '[Enter Name]'){
		name.textContent = '[ ]';
	} else {
		name.textContent = "["+e.target.innerText+"]";
	}
}

function setFocusInitial(e){
	if(focus.textContent == '[Enter Focus]'){
		focus.textContent = '[ ]';
	}else {
		focus.textContent = "["+e.target.innerText+"]";
	} 
}
function getFocus(){
	if(localStorage.getItem('focus') === null || focus.textContent == ' ' || focus.textContent == ''){
		focus.textContent = '[Enter Focus]';
	} else {
		focus.textContent = localStorage.getItem('focus');
	}
}
//event listeners
name.addEventListener('keypress',setName);
name.addEventListener('blur',setName);
name.addEventListener('focus',setNameInitial);
focus.addEventListener('keypress',setFocus);
focus.addEventListener('blur',setFocus);
focus.addEventListener('focus',setFocusInitial);

//run
showTime();
setBackground();
getName();
getFocus();