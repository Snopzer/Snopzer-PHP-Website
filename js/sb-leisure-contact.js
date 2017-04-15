
var $ = jQuery.noConflict();

function contact_me()
{ 
var sb_admin_ajax_url = $("#sb_admin_ajax_url").val();
$("form#contactForm #submit").attr( "disabled" , "disabled" );
var formData = $("form#contactForm").serialize();
$.post(sb_admin_ajax_url, {action : "sb_deliver_mail" , formData:formData }).done(function( data ) 
{ var res = data.split("|");  if(res[0] == 'true'){$("#msg-box").html( '<div class="alert alert-success" style="padding-bottom: 5px; padding-top: 5px;"><a href="#" class="close" data-dismiss="alert">&times;</a>'+res[1]+'</div>' );$('#contactForm').trigger("reset");}else{$("#msg-box").html( '<div class="alert alert-danger" style="padding-bottom: 5px; padding-top: 5px;"><a href="#" class="close" data-dismiss="alert">&times;</a>'+res[1]+'</div>' );}});

setTimeout(function(){ $("form#contactForm #submit").removeAttr("disabled"); }, 2000);}



if ($('div#map').length) {
/// map js goes here

// JavaScript Document
function initialize() {
var maplat = $("#contact-us-section-map-lat").val();
var maplng = $("#contact-us-section-map-lng").val();
var title  = $("#contact-us-section-map-title").val();
var desc  = $("#contact-us-section-map-desc").val();
var icon  = $("#contact-us-section-map-icon").val();
//icon'/images/map-marker.png'
var mapCanvas = document.getElementById('map');

var mapOptions = {
  center: new google.maps.LatLng(maplat, maplng),
  disableDefaultUI: true,
  scrollwheel: false,
  zoom: 16,
panControl:true,
zoomControl:true,
mapTypeControl:false,
scaleControl:false,
streetViewControl:false,
overviewMapControl:false,
rotateControl:false,
styles: [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}],
  mapTypeId: google.maps.MapTypeId.ROADMAP
}
//Create map
var map = new google.maps.Map(mapCanvas, mapOptions);

//Create marker
var marker = new google.maps.Marker({
  position: new google.maps.LatLng(maplat, maplng),
  map: map,
  title: title,
  icon: icon
});

//Map marker info
var contentString = '<div id="map-info" style="z-index:99999l;">'+
  '<h4>'+title+'</h4>'+
  '<p style="text-align:left; margin:0;"><br>'+desc+'</p>'+
  '</div>';

//Add info to marker 
var infowindow = new google.maps.InfoWindow({
  content: contentString
});

google.maps.event.addListener(marker, 'click', function() {
	infowindow.open(map,marker);
});

//Keep map centered
google.maps.event.addDomListener(window, 'resize', function() {
	var center = map.getCenter();
	google.maps.event.trigger(map, "resize");
	map.setCenter(center); 
});
}
google.maps.event.addDomListener(window, 'load', initialize);


}
