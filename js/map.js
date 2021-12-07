// Initialize and add the map

function markerClick(){
    //console.log("clicked marker ", this.name);
    document.getElementById('no_map_message').classList.add('hide');
    document.getElementById('gym_location').getElementsByTagName('option')[1].text = this.name;
    document.getElementById('gym_location').value = 1;
    document.getElementById('phone').innerHTML = this.phone;
    document.getElementById('open').innerHTML = this.open;
}
    
function initMap() {
    // The location of Uluru
    const uluru = { lat: 53.376181, lng: -6.320789 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: uluru,
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var gymList = [
            {'name': 'EFG. Ashtown', 'location': { lat: 53.376181, lng: -6.320789 }, 'phone':'01/2426-589', 'open':'0-24 Hours', 'img': "/assets/images.readme/gym2.PNG"},
			{'name': 'EFG. Coolmine', 'location': { lat: 53.392699, lng: -6.399460 }, 'phone':'01/2426-576', 'open':'0-24 Hours', 'img': "/assets/images.readme/gym3.PNG"},
			{'name': 'EFG. Dublin 2', 'location': { lat: 53.333437, lng: -6.262525 }, 'phone':'01/2426-325', 'open':'0-24 Hours', 'img': "/assets/images.readme/GYM.PNG"},
			{'name': 'EFG. Rathmines', 'location': { lat: 53.314395, lng: -6.245897 }, 'phone':'01/2426-126', 'open':'0-24 Hours', 'img': "/assets/images.readme/gym4.PNG"},
			{'name': 'EFG. Glasnevin', 'location': { lat: 53.389752, lng: -6.279799 }, 'phone':'01/2426-159', 'open':'0-24 Hours', 'img': "/assets/images.readme/gym6.PNG"},
			{'name': 'EFG. Grange', 'location': { lat: 53.394159, lng: -6.160858 }, 'phone':'01/2426-852', 'open':'0-24 Hours', 'img': "/assets/images.readme/gym7.PNG"},
			{'name': 'EFG. Killiney', 'location': { lat: 53.247920, lng: -6.122881 }, 'phone':'01/2426-452', 'open':'0-24 Hours', 'img': "/assets/images.readme/gym8.PNG"},    
      ];

    var markers = gymList.map(function(gym, i){
        newMarker =  new google.maps.Marker ({
            position: gym.location, 
            label: "",
            map: map,
            name: gym.name,
            phone: gym.phone,
            open: gym.open,
            image: gym.img
        });

    newMarker.addListener('click', markerClick);
        
    return newMarker;
    });

}

window.addEventListener('load', function () {
    const classButtons = document.querySelectorAll('a.class_selector');
    classButtons.forEach(function(button){
        button.addEventListener('click', function(){
            document.getElementById('selected_class').getElementsByTagName('option')[0].text = this.getAttribute('data-title');
            document.getElementById('selected_class').value = 0;
            document.getElementById("myImg").innerHTML = '<img class="map_img" src="'+ this.getAttribute('data-picture') + '" />';
        });
    });


    document.getElementById('selected_class').addEventListener('change', function() {
        
        image = this.getElementsByTagName('option')[this.selectedIndex].getAttribute('data-picture');
        // image = this.getAttribute('data-title');
        document.getElementById("myImg").innerHTML = '<img class="map_img" src="'+ image + '" />';
    })


});