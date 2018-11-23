$(document).ready(function() {
  $('#searchUser').on('keyup', function(e){
  	restaurantName = e.target.value;

  




$.ajax({
	url:'https://developers.zomato.com/api/v2.1/search?entity_id=Toronto&entity_type=city&q=' + restaurantName,
	method: 'GET',
	headers:{
		'user-key':'a6c711f8b413efafed04235e5accd9be',
		


	}


}).done(function(restaurants){


	console.log(restaurants);

})

})


});