document.addEventListener('DOMContentLoaded', function () {
    fetch('powody.txt')
        .then(response => response.text())
        .then(data => {
            const dailyTexts = data.split(';');
            const previousTextsContainer = document.getElementById('previousTexts');
            
            // ********* HEADER *********
            const headerText = document.createElement('div');
            headerText.className = 'headerText';
            headerText.innerHTML = 'Powody:';
            previousTextsContainer.appendChild(headerText);
            
            // ********* ELEMENTS *********
            dailyTexts.forEach((text, index) => {
                if (text.trim()) { // Skip empty texts
                    const messageBox = document.createElement('div');
                    messageBox.className = 'innerTextContainer';
                    
                    const messageNumber = document.createElement('span');
                    messageNumber.className = 'dayNumber';
                    messageNumber.textContent = `#${index + 1} `;
                    
                    const messageText = document.createElement('span');
                    messageText.className = 'message-text';
                    messageText.textContent = text.trim();
                    
                    messageBox.appendChild(messageNumber);
                    messageBox.appendChild(messageText);
                    previousTextsContainer.appendChild(messageBox);
                }
            });
        })
        .catch(error => console.error('Error fetching the messages:', error));
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