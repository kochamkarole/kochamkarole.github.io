document.addEventListener('DOMContentLoaded', function () {
    fetch('wiadomosc.txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById('textContainer').innerHTML = data;
        })
});

// ************ DEFAULT **************
document.addEventListener('DOMContentLoaded', function () {
    const homeLink = document.getElementById('homeLink');
    const homeIcon = document.getElementById('homeIcon');
    homeLink.addEventListener('mouseover', function () {
        homeIcon.src = '/images/home_blue.png';
    });
    homeLink.addEventListener('mouseout', function () {
        homeIcon.src = '/images/home.png';
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const menuTrigger = document.getElementById('menuTrigger');
    const menuBar = document.getElementById('menuBar');
    menuTrigger.addEventListener('click', function () {
        menuBar.classList.toggle('active');
    });
    menuBar.classList.remove('active');
});
// ************************************
