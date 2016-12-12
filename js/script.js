document.addEventListener("DOMContentLoaded", function(){

console.log("działa");

var num = document.getElementById("number");
var button = document.querySelector("button");
var totalPrice = document.getElementById("price");
var payments = document.querySelectorAll(".payments input[type='checkbox']" );
var damage = document.querySelectorAll(".damage input[type='checkbox']");

	
	function calcPrice(items){
	var count = 0;
		for( i=0; i<= damage.length-1; i++){
			damage[i].addEventListener('click', function(){
			var price1 = parseFloat(this.dataset.price);


			for (var i = 0; i <= items.length-1; i++) {
				if(items[i].checked){
				var price = parseFloat(items[i].dataset.price);

					var numV = num.value;
						if(numV>=100 && numV<=1000){
							count += 20;
						}else if(numV>=1001 && numV<=3000){
							count += 70;
						}else if(numV>=3001 && numV<=6000){
							count += 130;
						}else if(numV>=6001 && numV<=9000){
							count += 180;
						}else if(numV>=9001 && numV<=10000){
							count += 200;
						}else if(numV<100){
							alert("minimalna kwota ubezpieczenia musi wynosić 100 zł");
						}else{
							alert("maksymalna kwota ubezpieczenia musi wynosić 10 000zł")
						}
				}
			}
			document.querySelector('#price').innerHTML = Math.ceil(count*price*price1) + "zł";
			});
		}
	
	}



	for (var i = 0; i <= payments.length-1; i++) {
		payments[i].addEventListener('click', function(){
			calcPrice(payments);
		});
	}




});
