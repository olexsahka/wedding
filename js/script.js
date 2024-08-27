document.getElementById("qr-button").addEventListener("click", function() {
    document.getElementById("qrModal").style.display = "block";
});

document.getElementById("closeModal").addEventListener("click", function() {
    document.getElementById("qrModal").style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target == document.getElementById("qrModal")) {
        document.getElementById("qrModal").style.display = "none";
    }
});
