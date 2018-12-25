$(document).ready(function() {
    

$('#submit').on("click", function(e){
	e.preventDefault();
	const getRestaurant = $('input[name=name]').val();
	const endpoint = `http://opentable.herokuapp.com/api/restaurants?name=${getRestaurant}`;

	fetch(endpoint)
	.then(obj => obj.json())
	.then(data => {
	

  	const restaurantArray = data.restaurants;
  	restaurantNames = [];
  	const resName = restaurantArray.map(value =>{	
  	restaurantNames.push(value);
  	   })  

  	const filteredRestaurant = restaurantNames.map(restaurantobj =>{

  		
  	const restaurantHTML = `
	<div class = "listItems">
		<li>
		  <a target="_blank" href="${restaurantobj.mobile_reserve_url}" class="list-group-item">${restaurantobj.name}</a>
		  <button type="submit" id="addItem" class="btn btn-default addItem">Add to List!</button>
		</li>
		<img src=${restaurantobj.image_url}>
	</div>	`
	return restaurantHTML
  
		 }).join('')
  		$('.result').empty().append(filteredRestaurant);
	 })
	.catch(data =>{
		alert("Please enter a name of a restaurant");
	})

   });

let restaurantList = [];


		$("body").on("click", ".addItem", function(e){
			e.preventDefault();
  			const selectedRestaurant = $(this).prev().text();
  			const selectedHTML = `
  			<div class="listed-names">
	  			<li class="list-group-item">${selectedRestaurant}<div><input type="checkbox" name="check"class="form-check-input" id="exampleCheck1">
  		  		<label class="form-check-label" for="exampleCheck1"><strong>Visited</strong></label></div><button type="button"class="remove btn btn-primary">REMOVE</button></li>
  		  	</div>	
  			`



  			$('.list').append(selectedHTML);
  			restaurantList.push(selectedRestaurant);
  			console.log(restaurantList.length);
  				if(restaurantList.length === 10){
  				$(".addItem").attr("disabled", true);
  			}

  			
		})


	$('#clear').on('click', function(e){
		e.preventDefault();
		$('.list').empty()
		restaurantList =[];
		console.log(restaurantList);
		$(".addItem").attr("disabled", false);

	})

	$('body').on('click', '.remove', function(e){
		e.preventDefault();
		 $(this).parent().remove();
		 if(restaurantList.length <= 10){
  				$(".addItem").attr("disabled", false);
  			}
  		restaurantList.pop();
		
	})

		$('body').on('click', '.form-check-input', function(){
			const checkbox = $('input[name="check"]');
			checkbox.change(function(){
				if(this.checked === true){
					$(this).parent().parent().css("background-color", "yellow").attr('checked');
				} else{
					$(this).parent().parent().css("background-color", "white");
				}
			})

		

			 
		});
});






	



 
 