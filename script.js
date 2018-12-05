
let restaurantNames = [];



$('#submit').on("click", function(){
	const getRestaurant = $('input[name=name]').val();
	const endpoint = `http://opentable.herokuapp.com/api/restaurants?name=${getRestaurant}`;

	fetch(endpoint)
	.then(obj => obj.json())
	.then(data => {

  	const restaurantArray = data.restaurants;
  	const resName = restaurantArray.map(value =>{	
  	restaurantNames.push(value);
  	   })  

  	const filteredRestaurant = restaurantNames.forEach(restaurantobj =>{
  	const restaurantHTML = `
	<li><a href="${restaurantobj.mobile_reserve_url}" class="list-group-item">${restaurantobj.name}</a></li>`
  	$('.result').append(restaurantHTML);
		 })
  	
	 })

   });

console.log(restaurantNames);


