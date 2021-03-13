// Initialize and add the map
      function initMap() {
        // The location of Uluru
        const uluru = { lat: 53.344307, lng: -6.265476 };
        // The map, centered at Uluru
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 6,
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
          { lat: 53.333437, lng: -6.262525 }, 
          { lat: 53.314395, lng: -6.245897 },
          { lat: 53.307092, lng: -6.350751 },
          { lat: 53.389752, lng: -6.279799 },
          { lat: 53.394159, lng: -6.160858 },
          { lat: 53.247920, lng: -6.122881 }         
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