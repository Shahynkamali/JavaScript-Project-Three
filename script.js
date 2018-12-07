
let restaurantNames = [];



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

  		console.log(restaurantobj)
  	const restaurantHTML = `
	<div class = "listItems">
		<li>
		  <a href="${restaurantobj.mobile_reserve_url}" class="list-group-item">${restaurantobj.name}</a>
		  <button type="submit" class="btn btn-default">Add to List!</button>
		</li>
	</div>	`
	return restaurantHTML
  
		 }).join('')
  		$('.result').empty().append(filteredRestaurant);
	 })

   });


 
 