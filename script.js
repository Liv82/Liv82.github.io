let selectedMonth = 'all';  // Default to 'all'
let selectedType = 'all';   // Default to 'all'

// Function to filter posts based on both month and type
function filterPosts() {
    let posts = document.querySelectorAll('article');

    posts.forEach(function(post) {
        let postMonth = post.getAttribute('data-month');
        let postType = post.getAttribute('data-type');

        // Check if the post matches both filters (month and type)
        let monthMatch = (selectedMonth === 'all' || postMonth === selectedMonth);
        let typeMatch = (selectedType === 'all' || postType === selectedType);

        // Show the post if it matches both filters, otherwise hide it
        if (monthMatch && typeMatch) {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });
}

// Add event listeners for month filter buttons
document.querySelectorAll('#monthFilter button').forEach(function(button) {
    button.addEventListener('click', function() {
        selectedMonth = this.getAttribute('data-month');
        filterPosts();  // Call the filtering function whenever the month filter changes
    });
});

// Add event listeners for type filter buttons
document.querySelectorAll('#typeFilter button').forEach(function(button) {
    button.addEventListener('click', function() {
        selectedType = this.getAttribute('data-type');
        filterPosts();  // Call the filtering function whenever the type filter changes
    });
});
