emailjs.init("user_xKMlyK4S0o5h08XSJvtF7");

function sendMail(contactForm) {
    emailjs.send("gmail", "template_jg2e7ij", {
        "from_name" : contactForm.firstname.value + ' ' + contactForm.lastname.value,
        "from_email" : contactForm.email.value,
        "project_request" : contactForm.message.value
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