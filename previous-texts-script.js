document.addEventListener('DOMContentLoaded', function () {
    fetch('podpowiedzi.txt')
        .then(response => response.text())
        .then(data => {
            const dailyTexts = data.split(';');
            const currentDate = new Date();
            const previousTextsContainer = document.getElementById('previousTexts');

            // ********* HEADER *********
            const headerText = document.createElement('div');
            headerText.className = 'headerText'; 
            headerText.innerHTML = 'Poprzednie podpowiedzi:';
            previousTextsContainer.appendChild(headerText);

            // ********* REFERENCE **********
            const referenceDate = new Date('2024-04-20');
            const monthDifference = (currentDate.getMonth() - referenceDate.getMonth()) + 
                (12 * (currentDate.getFullYear() - referenceDate.getFullYear()));

            // ********* ELEMENTS *********
            if (currentDate.getDate() >= referenceDate.getDate()) {
                const previousMonthText = document.createElement('div');
                previousMonthText.className = 'innerTextContainer'; 
                previousMonthText.innerHTML = `<span class="dayNumber">#${monthDifference}</span> ${dailyTexts[monthDifference - 1]}`;
                previousTextsContainer.appendChild(previousMonthText);
            }
        });
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
