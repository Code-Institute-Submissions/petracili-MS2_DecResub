function sendMail(contactForm) {
    emailjs.send("service_9nyquja", "template_na9qb6i", {
        "from_name" : contactForm.name.value,
        "from_email" : contactForm.email.value,
        "project_request" : contactForm.projectsummary.value
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