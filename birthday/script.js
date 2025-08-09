document.addEventListener('DOMContentLoaded', function() {
    const cake = document.getElementById('cake');
    const letter = document.getElementById('letter');
    const balloonsContainer = document.querySelector('.balloons');
    const heartsContainer = document.querySelector('.hearts');
    const music = document.getElementById('music');
    let balloonsInterval;

    // 1. Зажигаем свечи и запускаем шарики
    setTimeout(() => {
        document.querySelectorAll('.candle .flame').forEach(flame => {
            flame.style.opacity = '1';
        });

        // Непрерывное создание шариков
        balloonsInterval = setInterval(createBalloon, 800);
    }, 1000);

    // 2. Клик на торт
    cake.addEventListener('click', function() {
        // Останавливаем шарики
        clearInterval(balloonsInterval);
        
        // Гасим свечи с анимацией
        document.querySelectorAll('.candle .flame').forEach(flame => {
            flame.style.animation = 'fadeOut 0.5s forwards';
        });

        // "Откусываем" торт
        cake.style.clipPath = 'polygon(0 0, 100% 0, 100% 70%, 50% 85%, 0 70%)';
        cake.style.transition = 'clip-path 1s ease';

        // Показываем письмо
        setTimeout(() => {
            letter.classList.remove('hidden');
            letter.style.opacity = '1';
            startHearts();
            music.play();
        }, 1000);
    });

    function createBalloon() {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.background = `hsl(${Math.random() * 360}, 100%, 70%)`;
        balloon.style.animationDuration = 8 + Math.random() * 7 + 's';
        balloonsContainer.appendChild(balloon);
        
        setTimeout(() => balloon.remove(), 15000);
    }

    function startHearts() {
        setInterval(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.className = 'heart';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = 3 + Math.random() * 4 + 's';
            heartsContainer.appendChild(heart);
            setTimeout(() => heart.remove(), 5000);
        }, 300);
    }
});