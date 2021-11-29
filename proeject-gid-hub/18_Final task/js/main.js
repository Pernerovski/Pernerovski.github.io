$(document).ready(function(){
	$(".products_wrap").slick({
		arrows: false,
		infinite: false,
		variableWidth: true,
		centerMode: true,
		// autoplay:true,
		// speed:1000,
		// autoplaySpeed:1500,

	});
});
function initMap() {
  const uluru = { lat: 48.922251, lng: 24.7097384 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: uluru,
  });
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
  let InfoWindow = new google.maps.InfoWindow({
  	content: '<h1>Привіт!</h1>'
  })
  InfoWindow.open(map, marker)
}