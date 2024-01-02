document.addEventListener('DOMContentLoaded', function () {
    fetch('wiadomosc.txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById('textContainer').innerHTML = data;
        })
        .catch(error => console.error('Error loading explanation.txt:', error));
});
document.addEventListener('DOMContentLoaded', function () {
    const homeLink = document.getElementById('homeLink');
    const homeIcon = document.getElementById('homeIcon');

    homeLink.addEventListener('mouseover', function () {
        // Change the image source on hover
        homeIcon.src = '/images/home_red.png';
    });

    homeLink.addEventListener('mouseout', function () {
        // Reset the image source when mouse leaves
        homeIcon.src = '/images/home.png';
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const menuTrigger = document.getElementById('menuTrigger');
    const menuBar = document.getElementById('menuBar');

    menuTrigger.addEventListener('click', function () {
        // Toggle the 'active' class on the menu bar to show/hide it
        menuBar.classList.toggle('active');
    });

    // Hide menu bar initially
    menuBar.classList.remove('active');
});
