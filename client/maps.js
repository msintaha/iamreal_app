Template.stores.events({
	'click .store1':function(e){
		
		 GoogleMaps.init(
    {
        'sensor': true, //optional
       // 'key': 'MY-GOOGLEMAPS-API-KEY', //optional
        'language': 'en' //optional
    }, 
    function(){
        var mapOptions = {
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.MAPS
        };
	var myLatlng = new google.maps.LatLng(23.745627, 90.377638);
        map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions); 
        map.setCenter(new google.maps.LatLng( 
23.745627, 90.377638));

	var marker = new google.maps.Marker({
    position: myLatlng,
    title:"Address 1"
});
marker.setMap(map);	
    });
	},



	'click .store2':function(e){
		e.preventDefault();
		 GoogleMaps.init(
    {
        'sensor': true, //optional
       // 'key': 'MY-GOOGLEMAPS-API-KEY', //optional
        'language': 'en' //optional
    }, 
    function(){
        var mapOptions = {
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.MAPS
        };
	var myLatlng = new google.maps.LatLng(23.748583, 90.371620);
        map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions); 
        map.setCenter(new google.maps.LatLng( 
23.748583, 90.371620));

	var marker = new google.maps.Marker({
    position: myLatlng,
    title:"Address 2"
});
marker.setMap(map);	
    });
	},

	'click .store3':function(e){
		e.preventDefault();
		 GoogleMaps.init(
    {
        'sensor': true, //optional
       // 'key': 'MY-GOOGLEMAPS-API-KEY', //optional
        'language': 'en' //optional
    }, 
    function(){
        var mapOptions = {
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.MAPS
        };
	var myLatlng = new google.maps.LatLng(23.748583, 90.371620);
        map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions); 
        map.setCenter(new google.maps.LatLng( 
23.748583, 90.371620));

	var marker = new google.maps.Marker({
    position: myLatlng,
    title:"Address 2"
});
marker.setMap(map);	
    });
	},

	'click .store4':function(e){
		e.preventDefault();
		 GoogleMaps.init(
    {
        'sensor': true, //optional
       // 'key': 'MY-GOOGLEMAPS-API-KEY', //optional
        'language': 'en' //optional
    }, 
    function(){
        var mapOptions = {
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.MAPS
        };
	var myLatlng = new google.maps.LatLng(
23.751961, 90.375678);
        map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions); 
        map.setCenter(new google.maps.LatLng( 

23.751961, 90.375678));

	var marker = new google.maps.Marker({
    position: myLatlng,
    title:"Address 2"
});
marker.setMap(map);	
    });
	}


});

Template.stores.rendered=function(){
	
		 GoogleMaps.init(
    {
        'sensor': true, //optional
       // 'key': 'MY-GOOGLEMAPS-API-KEY', //optional
        'language': 'en' //optional
    }, 
    function(){
        var mapOptions = {
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.MAPS
        };
	var myLatlng = new google.maps.LatLng(23.745627, 90.377638);
        map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions); 
        map.setCenter(new google.maps.LatLng( 
23.745627, 90.377638));

	var marker = new google.maps.Marker({
    position: myLatlng,
    title:"Address 1"
});
marker.setMap(map);	
    });
}