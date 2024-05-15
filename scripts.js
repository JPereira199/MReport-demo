document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.load-content');
    const mainContent = document.querySelector('.main-content');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior

            const url = this.getAttribute('href');

            fetch(url)
                .then(response => response.text())
                .then(data => {
                    mainContent.innerHTML = data;
                })
                .catch(error => {
                    console.error('Error loading content:', error);
                    mainContent.innerHTML = '<p>Failed to load content. Please try again later.</p>';
                });
        });
    });
});
