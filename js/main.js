(function(){

var cart = document.getElementById('cart'),
				moreless = document.getElementsByClassName('moreless')[0],
				cont = document.getElementsByClassName('cont')[0];
	
window.addEventListener('resize',function(event){
	var docwidth = window.innerWidth;

	if(window.innerWidth>700){
		cart.style.top = 0;
	}	else {
		cart.style.top = '25px';			
	}	
	console.log("addEventListener called");
	console.log("docwidth = "+docwidth);
});

cont.style.display = 'none';
moreless.addEventListener('click',function(){
	// if(cont.style.display = 'none'){
	if(moreless.innerHTML === 'more'){
		cont.style.display = 'block';
		moreless.innerHTML = 'less';
	}else{
		cont.style.display = 'none';
		moreless.innerHTML = 'more';
	}
});

})();