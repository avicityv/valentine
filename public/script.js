document.addEventListener('DOMContentLoaded', () => {
    const heartField = document.getElementById('heartField');
    const countElement = document.getElementById('count');
    const valentineText = document.getElementById('valentineText');
    let count = 0;

    // Создаем случайные сердца
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 90 + '%';
        heart.style.top = Math.random() * 90 + '%';
        heart.style.fontSize = Math.random() * 30 + 20 + 'px';
        
        heart.addEventListener('click', () => {
            count++;
            countElement.textContent = count;
            heart.style.display = 'none';
            if (count === 10) showValentine();
        });
        
        heartField.appendChild(heart);
    }

    function showValentine() {
        valentineText.classList.remove('hidden');
        valentineText.innerHTML = `
            <h2>Для самой прекрасной девушки на свете 🌸</h2>
            <p>Каждый момент с тобой - как волшебство... ${new Date().getFullYear()} наших счастливых мгновений! Ты моя любовь, мое вдохновение и мое всё 💖</p>
            <p>С Днём Святого Валентина, моя ненаглядная! 🥰</p>
            <button onclick="location.reload()">Ещё разок! 🔁</button>
        `;
    }
});
