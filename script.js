document.getElementById("leadForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();
    let errorMsg = document.getElementById("errorMsg");

    if (name === "" || phone === "" || email === "") {
        errorMsg.textContent = "Please fill all fields.";
        return;
    }

    if (!/^\d{10}$/.test(phone)) {
        errorMsg.textContent = "Enter valid 10-digit phone number.";
        return;
    }

    errorMsg.textContent = "";

    // Redirect to Thank You Page
    window.location.href = "thankyou.html";
});

function callNow() {
    window.location.href = "tel:+919999999999";
}

function whatsappNow() {
    window.open("https://wa.me/919999999999", "_blank");
}
