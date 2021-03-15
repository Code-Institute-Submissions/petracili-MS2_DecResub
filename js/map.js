// Initialize and add the map

function markerClick(){
		//console.log("clicked marker ", this.name);
		document.getElementById('gym_name').innerHTML = this.name;
		document.getElementById('phone').innerHTML = this.phone;
		document.getElementById('open').innerHTML = this.open;
	
	}
function initMap() {
    // The location of Uluru
    const uluru = { lat: 53.344307, lng: -6.265476 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: uluru,
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var gymList = [
            {'name': 'Uluru', 'location': { lat: 53.344307, lng: -6.265476 }, 'phone':'26262727281', 'open':'24 H1'},
			{'name': 'Gym 1', 'location': { lat: 53.392699, lng: -6.399460 }, 'phone':'26262727282', 'open':'24 H2'},
			{'name': 'Gym 2', 'location': { lat: 53.333437, lng: -6.262525 }, 'phone':'26262727283', 'open':'24 H3'},
			{'name': 'Gym 3', 'location': { lat: 53.314395, lng: -6.245897 }, 'phone':'26262727284', 'open':'24 H4'},
			{'name': 'Gym 4', 'location': { lat: 53.307092, lng: -6.350751 }, 'phone':'26262727285', 'open':'24 H5'},
			{'name': 'Gym 5', 'location': { lat: 53.389752, lng: -6.279799 }, 'phone':'26262727286', 'open':'24 H6'},
			{'name': 'Gym 6', 'location': { lat: 53.394159, lng: -6.160858 }, 'phone':'26262727287', 'open':'24 H7'},
			{'name': 'Gym 7', 'location': { lat: 53.247920, lng: -6.122881 }, 'phone':'26262727288', 'open':'24 H8'},      
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