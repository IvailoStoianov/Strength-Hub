document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("thank-you-msg").style.display = "block";
    setTimeout(function() {
        document.getElementById("thank-you-msg").style.display = "none";
    }, 3000);
    document.getElementById("full-name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
});




