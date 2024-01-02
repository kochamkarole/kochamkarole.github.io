document.addEventListener('DOMContentLoaded', function () {
    // Fetch the content of the text file containing daily texts
    fetch('powody.txt')
        .then(response => response.text())
        .then(data => {
            // Split the text into an array using a comma as the delimiter
            const dailyTexts = data.split(';');

            // Rest of the code to display today's text
            const currentDate = new Date();
            const todayTextContainer = document.getElementById('todayText');

            // Display today's text container
            const todayTextContainerDiv = document.createElement('div');
            todayTextContainerDiv.className = 'todayTextContainer'; 
            todayTextContainer.append(todayTextContainerDiv);

            // Display the header text
            const headerText = document.createElement('div');
            headerText.className = 'headerText'; 
            headerText.innerHTML = 'Powód na dziś:';
            todayTextContainerDiv.appendChild(headerText);

            // Calculate the day difference
            const referenceDate = new Date('2024-01-03'); // Adjust the reference date as needed
            const dayDifference = Math.floor((currentDate - referenceDate) / (24 * 60 * 60 * 1000));

            // Display today's text
            const todayText = document.createElement('div');
            todayText.className = 'innerTextContainer'; // Apply the inner text container class
            todayText.innerHTML = `<span class="dayNumber">#${dayDifference + 1}</span> ${dailyTexts[dayDifference]}`;
            todayTextContainerDiv.appendChild(todayText);
        })
        .catch(error => console.error('Error loading dailyTexts.txt:', error));
        // Original code for the countdown
    const referenceDateCountdown = new Date('2022-10-10');
    const currentDate = new Date();
    const daysPassedCountdown = Math.floor((currentDate - referenceDateCountdown) / (24 * 60 * 60 * 1000));

    const countdownContainer = document.getElementById('countdownContainer');
    const countdownTextElement = document.getElementById('countdownText');
    countdownTextElement.textContent = `${daysPassedCountdown} dni`;
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

