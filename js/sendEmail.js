function sendMail(contactForm) { 
    emailjs.send("service_9nyquja", "template_na9qb6i", {
        "from_name" : contactForm.firstname.value,
        "from_lastname" : contactForm.lastname.value,
        "from_email" : contactForm.email.value,
        "message" : contactForm.message.value
    })
    .then(
        function(response){
            console.log("SUCCESS", response);
        },
        function(error){
             console.log("FAILED", error);
        });

    return false;
}