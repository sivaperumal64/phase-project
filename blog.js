document.addEventListener('DOMContentLoaded', function() {
    // Add functionality for "Read More" links
    const readMoreLinks = document.querySelectorAll('.read-more');
    
    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Here you would typically navigate to the full blog post
            // For now, we'll just log a message
            console.log('Navigating to full blog post...');
        });
    });

    // You can add more functionality here, such as:
    // - Pagination for blog posts
    // - Search functionality
    // - Filtering posts by category
    // - Newsletter signup
});
