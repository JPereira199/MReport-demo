document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.sidebar a');
    const iframe = document.getElementById('content-frame');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior
            const href = this.getAttribute('href'); // Get the href attribute of the clicked link
            iframe.src = href; // Set the iframe src attribute to the href value
        });
    });
});
