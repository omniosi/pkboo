(function(){

	var cart = document.getElementById('cart');
	
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

})();