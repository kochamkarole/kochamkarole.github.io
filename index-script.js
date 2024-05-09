document.addEventListener('DOMContentLoaded', function () {
    fetch('podpowiedzi.txt')
        .then(response => response.text())
        .then(data => {
// ********* THE CLUE ****************************
            const monthlyTexts = data.split(';');
            const currentDate = new Date();
            const todayTextContainer = document.getElementById('todayText');

            const todayTextContainerDiv = document.createElement('div');
            todayTextContainerDiv.className = 'todayTextContainer'; 
            todayTextContainer.append(todayTextContainerDiv);

            const headerText = document.createElement('div');
            headerText.className = 'headerText'; 
            headerText.innerHTML = 'Podpowiedź';
            todayTextContainerDiv.appendChild(headerText);
            // *********** REFERENCE ***********
            const referenceDate = new Date('2024-05-10');
            const monthDifference = (currentDate.getMonth() - referenceDate.getMonth()) + 
                (12 * (currentDate.getFullYear() - referenceDate.getFullYear()));

            if (currentDate.getDate() >= referenceDate.getDate()) {
                const todayText = document.createElement('div');
                todayText.className = 'innerTextContainer';
                todayText.innerHTML = `<span class="dayNumber">#${monthDifference + 1}</span> ${monthlyTexts[monthDifference]}`;
                todayTextContainerDiv.appendChild(todayText);
            } else {
                const previousMonthText = document.createElement('div');
                previousMonthText.className = 'innerTextContainer'; // Apply the inner text container class
                previousMonthText.innerHTML = `<span class="dayNumber">#${monthDifference}</span> ${monthlyTexts[monthDifference - 1]}`;
                todayTextContainerDiv.appendChild(previousMonthText);
            }

// ********* COUNTDOWN ***************

            const totalCountdownText = document.createElement('div');
            totalCountdownText.className = 'totalCountdownText';
            totalCountdownText.textContent = 'razem:';
            totalCountdownText.style.color = '#000';
            const countdownContainer = document.getElementById('countdownContainer');
            countdownContainer.insertBefore(totalCountdownText, countdownContainer.firstChild);
            const referenceDateCountdown = new Date('2022-10-10');
            const daysTotalCountdown = Math.floor((currentDate - referenceDateCountdown) / (24 * 60 * 60 * 1000));
            let daysPassedCountdown = 0;

            const countdownTextElement = document.getElementById('countdownText');
    function updateCountdown() {
        if (daysPassedCountdown <= daysTotalCountdown) {
            const displayNumber = Math.min(daysPassedCountdown, daysTotalCountdown);
            countdownTextElement.textContent = `${displayNumber} dni`;
            daysPassedCountdown += 1;
            setTimeout(updateCountdown, 15);
        }
    }
    updateCountdown();
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