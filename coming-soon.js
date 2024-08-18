// Function to display popup
function showPopup() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

// Function to close popup
function closePopup() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Close the modal when user clicks outside of it
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}