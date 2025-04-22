// Get modal element
var modal = document.getElementById("myModal");
    
// Get all view buttons
var viewButtons = document.querySelectorAll('.view-button');

// Get the modal image element
var modalImg = document.getElementById("modalImage");

viewButtons.forEach((button, index) => {
    button.onclick = function(event) {
        event.preventDefault(); // Prevent default link action
        
        // Get the corresponding image for this project
        var projectImage = button.previousElementSibling; // Get the image in the same <li>
        
        // Toggle the visibility of the image
        if (projectImage.classList.contains('show')) {
            projectImage.classList.remove('show'); // Hide the image if it's already shown
        } else {
            // Hide all other project images
            document.querySelectorAll(".project-image").forEach((img) => {
                img.classList.remove('show'); // Hide other images
            });
            projectImage.classList.add('show'); // Show the clicked image
        }

        // Show modal with the clicked image if it's visible now
        if (projectImage.classList.contains('show')) {
            modal.style.display = "block"; // Show modal
            modalImg.src = projectImage.dataset.project; // Set the modal image src to the image
        }
    }
});

// Get the <span> element that closes the modal
var span = document.getElementById("closeModal");
span.onclick = function() {
    modal.style.display = "none"; // Close modal when span is clicked
}

// Close modal when clicking outside of the image
modal.onclick = function() {
    modal.style.display = "none";
}

//for services description hidden text
document.querySelectorAll('.service-title').forEach(title => {
    title.addEventListener('click', () => {
        // Get the currently visible description
        const currentlyVisible = document.querySelector('.service-description:not([style*="display: none"])');
        
        // Get the description that corresponds to the clicked title
        const description = title.nextElementSibling;

        // Check if the clicked description is the currently visible one
        if (currentlyVisible && currentlyVisible !== description) {
            // Hide the currently visible description
            currentlyVisible.style.display = 'none';
        }

        // Toggle the display of the clicked description
        description.style.display = (description.style.display === 'none' || description.style.display === '') ? 'block' : 'none'; 
    });
});