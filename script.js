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

// Redirection
function redirectTo(profile) {
    const urls = {
        resume: 'URL_TO_YOUR_RESUME',
        leetcode: 'https://leetcode.com/u/prateekbhaisora/',
        codeforces: 'https://codeforces.com/profile/prateekbhaisora',
        geeksforgeeks: 'URL_TO_YOUR_GEEKSFORGEEKS_PROFILE',
        github: 'https://github.com/prateekbhaisora',
        linkedin: 'URL_TO_YOUR_LINKEDIN_PROFILE'
    };
    
    window.open(urls[profile], '_blank');
}

document.addEventListener('DOMContentLoaded', function() {
    const showMoreBtn = document.getElementById('show-more-btn');
    const projectItems = document.querySelectorAll('.project-item');
    const maxVisibleItems = 3; // Number of projects to show initially

    // Initially hide projects beyond the initial limit
    projectItems.forEach((item, index) => {
        if (index >= maxVisibleItems) {
            item.style.display = 'none';
        }
    });

    let showingAll = false; // Track whether all projects are visible

    showMoreBtn.addEventListener('click', function() {
        if (showingAll) {
            // Show only the initial set of projects
            projectItems.forEach((item, index) => {
                if (index >= maxVisibleItems) {
                    item.style.display = 'none';
                }
            });
            showMoreBtn.textContent = 'Show More Projects';
        } else {
            // Show all projects
            projectItems.forEach((item) => {
                item.style.display = 'flex'; // Change to flex or block based on your layout
            });
            showMoreBtn.textContent = 'Show Lesser Projects';
        }
        showingAll = !showingAll; // Toggle the state
    });
});

