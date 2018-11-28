$(document).ready(function() {
  $('#searchRestaurant').on('keyup', function(e){
  	let nameRestaurant = e.target.value;

  			$.ajax({
  				url:` https://opentable.herokuapp.com/api/restaurants?city=Toronto&name=${nameRestaurant}`,
  				method: 'GET',
  				dataType: 'json'
  			}).done(function(restaurant){
  				$.each(restaurant, function(index, place){
  			     for(i = 0; i < place.length; i++){
              console.log(place[0])
              console.log("Hello");

             }
  				})
  			})
  	


	
	})
});