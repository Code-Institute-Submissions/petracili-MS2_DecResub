function sendMail(contactForm) { 
    emailjs.send("service_9nyquja", "template_na9qb6i", {
        "from_name" : contactForm.firstname.value,
        "from_lastname" : contactForm.lastname.value,
        "from_email" : contactForm.email.value,
        "message" : contactForm.message.value
    })
    .then(
        function(response){
            alert('Contact sent, please check you email');
        },
        function(error){
             console.log("FAILED", error);
        });

    return false;
}

function sendReservation(contactForm) { 
    emailjs.send("service_9nyquja", "template_na9qb6i", {
        "gym_location" : contactForm.gym_location.options[contactForm.gym_location.selectedIndex].text,
        "gym_class" : contactForm.gym_class.options[contactForm.gym_class.selectedIndex].text,
        "gym_time" : contactForm.gym_time.options[contactForm.gym_time.selectedIndex].text,
        "from_email" : contactForm.email.value
    })
    .then(
        function(response){
            alert('Reservation sent, please check you email');
        },
        function(error){
             console.log("FAILED", error);
        });

    return false;
}