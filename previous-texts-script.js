document.addEventListener('DOMContentLoaded', function () {
    // Fetch the content of the text file containing daily texts
    fetch('powody.txt')
        .then(response => response.text())
        .then(data => {
            // Split the text into an array using a comma as the delimiter
            const dailyTexts = data.split(';');

            // Rest of the code to display previous texts
            const currentDate = new Date();
            const previousTextsContainer = document.getElementById('previousTexts');

            // Display the header text
            const headerText = document.createElement('div');
            headerText.className = 'headerText'; // Apply the header text class
            headerText.innerHTML = 'Poprzednie powody:';
            previousTextsContainer.appendChild(headerText);

            // Loop through each day and display the texts
            for (let i = 0; i < dailyTexts.length; i++) {
                const date = new Date('2024-01-03'); // Adjust the reference date as needed
                date.setDate(date.getDate() + i);

                // Check if the date is before today's date
                if (date < new Date(new Date().setHours(0, 0, 0, 0))) {
                    const dayNumber = i + 1;
                    const text = dailyTexts[i];

                    const textElement = document.createElement('div');
                    textElement.className = 'innerTextContainer'; // Apply the text container class
                    textElement.innerHTML = `<span class="dayNumber">#${dayNumber}</span> ${text}`;
                    previousTextsContainer.appendChild(textElement);
                }
            }
        })
        .catch(error => console.error('Error loading dailyTexts.txt:', error));
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
