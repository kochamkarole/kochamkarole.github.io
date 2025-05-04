document.addEventListener('DOMContentLoaded', function () {
    fetch('matura.txt')
        .then(response => response.text())
        .then(data => {
            const lines = data.split(';').filter(Boolean);
            const dateMap = {};

            lines.forEach(entry => {
                const match = entry.match(/"(\d{4}-\d{2}-\d{2})":\{"heading":"(.*?)","text":"(.*?)"(,"audio":"(.*?)")?\}/);
                if (match) {
                    const [_, date, heading, text, , audio] = match;
                    dateMap[date] = { heading, text, audio };
                }
            });

            const today = new Date();
            const todayStr = today.toISOString().split('T')[0];

            const todayTextContainer = document.getElementById('todayText');
            const wrapper = document.createElement('div');
            wrapper.className = 'todayTextContainer';

            const entry = dateMap[todayStr];

            const heading = entry ? entry.heading : 'Brak nowej wiadomości';
            const text = entry ? entry.text : 'Zaglądaj codziennie, może jutro coś się pojawi.';

            const header = document.createElement('div');
            header.className = 'headerText';
            header.textContent = heading;

            const content = document.createElement('div');
            content.innerHTML = text;

            if (!entry) {
                content.className = 'defaultMessage';
            }

            wrapper.appendChild(header);
            wrapper.appendChild(content);

            // Add custom audio button if audio exists
            if (entry && entry.audio) {
                const audio = new Audio(entry.audio);

                const playButton = document.createElement('button');
                playButton.textContent = '▶ głosówka';
                playButton.className = 'playButton';

                let isPlaying = false;

                playButton.addEventListener('click', () => {
                    if (!isPlaying) {
                        audio.play();
                        playButton.textContent = '⏸ zatrzymaj';
                        isPlaying = true;
                    } else {
                        audio.pause();
                        audio.currentTime = 0;
                        playButton.textContent = '▶ wznów';
                        isPlaying = false;
                    }

                    audio.onended = () => {
                        playButton.textContent = '▶ jeszcze raz';
                        isPlaying = false;
                    };
                });

                wrapper.appendChild(playButton);
            }

            todayTextContainer.appendChild(wrapper);
        });

    // Fast countdown
    const countdownTextElement = document.getElementById('countdownText');
    const referenceDate = new Date('2022-10-10');
    const currentDate = new Date();
    const daysTotal = Math.floor((currentDate - referenceDate) / (1000 * 60 * 60 * 24));
    let counter = 0;

    function updateCountdown() {
        if (counter <= daysTotal) {
            countdownTextElement.textContent = `${counter} dni`;
            counter++;
            setTimeout(updateCountdown, 5);
        }
    }

    updateCountdown();
});
