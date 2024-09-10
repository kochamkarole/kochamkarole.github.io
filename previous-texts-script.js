document.addEventListener('DOMContentLoaded', function () {
    // Fetch and display daily texts from the past months
    fetch('podpowiedzi.txt')
        .then(response => response.text())
        .then(data => {
            const dailyTexts = data.split(';'); // Split file content by ';' to get daily texts
            const currentDate = new Date();
            const previousTextsContainer = document.getElementById('previousTexts');

            // ********* HEADER *********
            const headerText = document.createElement('div');
            headerText.className = 'headerText'; 
            headerText.innerHTML = 'Poprzednie podpowiedzi:';
            previousTextsContainer.appendChild(headerText);

            // ********* REFERENCE DATE **********
            const referenceDate = new Date('2024-04-10');
            let monthDifference = (currentDate.getMonth() - referenceDate.getMonth()) + 
                (12 * (currentDate.getFullYear() - referenceDate.getFullYear()));

            // Adjust monthDifference if current day is before the reference day
            if (currentDate.getDate() < referenceDate.getDate()) {
                monthDifference--;
            }

            // ********* DISPLAY DAILY TEXTS *********
            // Ensure monthDifference doesn't exceed available texts
            if (monthDifference > dailyTexts.length) {
                monthDifference = dailyTexts.length;
            }

            // Loop through and display the texts for each month passed
            for (let i = 0; i < monthDifference; i++) {
                const previousMonthText = document.createElement('div');
                previousMonthText.className = 'innerTextContainer'; 
                previousMonthText.innerHTML = `<span class="dayNumber">#${i + 1}</span> ${dailyTexts[i]}`;
                previousTextsContainer.appendChild(previousMonthText);
            }
        })
        .catch(error => {
            console.error('Error fetching podpowiedzi.txt:', error);
        });
});
