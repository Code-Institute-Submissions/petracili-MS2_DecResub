// Initialize and add the map
      function initMap() {
        // The location of Uluru
        const uluru = { lat: -25.344, lng: 131.036 };
        // The map, centered at Uluru
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 4,
          center: uluru,
        });
        // The marker, positioned at Uluru
        const marker = new google.maps.Marker({
          position: uluru,
          map: map,
        });
              var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

      var locations = [
          { lat: 53.337203, lng: -6.260572 },
          { lat: 41.084045, lng: -73.874245 }, 
          { lat: 40.754932, lng: -73.984016 }
      ];

       var markers = locations.map(function(location, i){
           return new google.maps.Marker ({
               position: location, 
               label: labels[i % labels.length],
               map: map,
           });
       });

       //var markerClusterer = new MarkerClusterer(map, markers,
       // {imagePath:"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"});
    }

    $('.contact-form').find('.form-control').each(function() {
  var targetItem = $(this).parent();
  if ($(this).val()) {
    $(targetItem).find('label').css({
      'top': '10px',
      'fontSize': '14px'
    });
  }
})
$('.contact-form').find('.form-control').focus(function() {
  $(this).parent('.input-block').addClass('focus');
  $(this).parent().find('label').animate({
    'top': '10px',
    'fontSize': '14px'
  }, 300);
})
$('.contact-form').find('.form-control').blur(function() {
  if ($(this).val().length == 0) {
    $(this).parent('.input-block').removeClass('focus');
    $(this).parent().find('label').animate({
      'top': '25px',
      'fontSize': '18px'
    }, 300);
  }
})