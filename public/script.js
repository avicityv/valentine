class ValentineGame {
    constructor() {
        this.state = {
            hearts: Number(localStorage.getItem('hearts')) || 0,
            clickPower: Number(localStorage.getItem('clickPower')) || 1,
            autoPower: Number(localStorage.getItem('autoPower')) || 0,
            prices: {
                click: Number(localStorage.getItem('clickPrice')) || 10,
                auto: Number(localStorage.getItem('autoPrice')) || 50
            }
        };

        this.init();
        this.startAutoCollector();
    }

    init() {
        this.bindEvents();
        this.updateUI();
        this.checkValentineButton();
    }

    bindEvents() {
        const clickArea = document.getElementById('clickArea');
        if (clickArea) {
            clickArea.addEventListener('click', (e) => this.handleClick(e));
        }
    }

    handleClick(e) {
        this.addHearts(this.state.clickPower);
        this.createClickEffect(e);
        this.animateHeart();
    }

    animateHeart() {
        const heart = document.querySelector('.mega-heart');
        heart.style.transform = 'scale(0.95)';
        setTimeout(() => heart.style.transform = 'scale(1)', 100);
    }

    addHearts(amount) {
        this.state.hearts += amount;
        this.updateUI();
        this.saveProgress();
        this.checkValentineButton();
    }

    buyUpgrade(type) {
        if (this.state.hearts >= this.state.prices[type]) {
            this.state.hearts -= this.state.prices[type];
            
            if (type === 'click') {
                this.state.clickPower += 1;
                this.state.prices.click = Math.round(this.state.prices.click * 1.25);
            } else {
                this.state.autoPower += 1;
                this.state.prices.auto = Math.round(this.state.prices.auto * 1.4);
            }
            
            this.updateUI();
            this.saveProgress();
        }
    }

    startAutoCollector() {
        setInterval(() => {
            if (this.state.autoPower > 0) {
                this.addHearts(this.state.autoPower);
            }
        }, 1000);
    }

    checkValentineButton() {
        const btn = document.getElementById('valentineBtn');
        if (this.state.hearts >= 1000) {
            btn.classList.remove('hidden');
            btn.disabled = false;
        } else {
            btn.classList.add('hidden');
        }
    }

    createClickEffect(e) {
        const effect = document.createElement('div');
        effect.className = 'click-effect';
        effect.style.left = `${e.clientX - 15}px`;
        effect.style.top = `${e.clientY - 15}px`;
        effect.textContent = `+${this.state.clickPower}`;
        document.body.appendChild(effect);
        setTimeout(() => effect.remove(), 1000);
    }

    updateUI() {
        document.getElementById('hearts').textContent = this.state.hearts;
        document.getElementById('autoRate').textContent = this.state.autoPower;
        document.getElementById('clickPower').textContent = this.state.clickPower;
        document.getElementById('clickUpgrade').textContent = `${this.state.prices.click} ❤️`;
        document.getElementById('autoUpgrade').textContent = `${this.state.prices.auto} ❤️`;
        
        const progress = (this.state.hearts / 1000) * 100;
        document.getElementById('progress').style.width = `${Math.min(progress, 100)}%`;
    }

    saveProgress() {
        localStorage.setItem('hearts', this.state.hearts);
        localStorage.setItem('clickPower', this.state.clickPower);
        localStorage.setItem('autoPower', this.state.autoPower);
        localStorage.setItem('clickPrice', this.state.prices.click);
        localStorage.setItem('autoPrice', this.state.prices.auto);
    }

    
    showValentine() {
        const container = document.getElementById('valentine');
        container.classList.remove('hidden');
        container.innerHTML = `
            <h2>Для самой любимой 💖</h2>
            <p>Ты собрала ${this.state.hearts} сердец!</p>
            'Моя милая Арина, спасибо что ты со мной уже целых миллиард лет. Ты единственный мой самый родной и любимый человек. Что бы ни случилось, я знаю, что есть ты — маленький комочек тепла, который согреет меня даже в самые холодные и злые времена. \
             <p> Я надеюсь, что у нас всё будет замечательно, моя милая Арина. Что все наши проблемы решаться и мы спокойно будем жить нашу совместную прекрасную жизнь, чтобы никаких злоб и обидок, всегда всё было по кайфу и радостно. \
             <p> В данный момент у меня пиздец тяжеловатый период, а впрочем лёгких у меня особо никогда и не бывало xD Уж не знаю с чем это связано, но всегда я обязан прикладывать сверхусилия ради обычной награды. Наверное, поэтому я и люблю фэнтези, где главный герой прикладывает сверхусилия и получает сверхнаграду, хоть в моей жизни такого и не происходит. Хотя, оффер на 110к когда я рассчитывал на 40к первый год и можно считать таковой, но все эти переживания по поводу, дождуться ли меня вообще очень сильно грызут моё моральное состояние и убавляют радость от этой ачивки... \
             <p> Я очень ценю, что ты остаёшься со мной, веришь в меня и поддерживаешь. Спасибо, моя дорогая милая Арина, я люблю тебя. Безумно люблю. \
             <p> Знаешь.. Я искренне считаю тебя великой женщиной. Ты знаешь. Я тебе уже рассказывал. Но расскажу ещё раз. Я знаю, что тебе не легко. Я знаю, что ты тоже прикладываешь множество усилий, как физических, так и моральных. Я вижу это. Вижу как это тебя меняет. Меня радует твой рост. И я ценю все твои усилия, независимо — в отношениях или ради чисто своих хотелок ты их прикладываешь. Ты огромная умничка, и я очень рад что именно мне досталась такая великолепная женщина. А про величие - отдельная графа. За исключением шуток и ревности, ты безумно мудрая. Не знаю, честно, откуда в тебе это взялось, но в тебе сидит очень большая мудрость, и я рад что помогаю тебе её раскрывать. Я не могу объяснить это словами, но что-то в нашей коммуникации есть такое, что нам не становится скучно, нисмотря на абсолютно разный кругозор и интересы. Наша ментальная связь, когда я буквально физически чувствую уколы твоего внимания чего стоит? Что-то на мистическом уровне, не иначе. :) \
             <p> Я тебя люблю, Арина. Спасибо что ты есть <3'
            <button onclick="resetGame()">Играть ещё (сброс прогресса)</button>
        `;
    }
}

// Инициализация игры
let game;
document.addEventListener('DOMContentLoaded', () => {
    game = new ValentineGame();
});

// Глобальные функции
function buyUpgrade(type) {
    game.buyUpgrade(type);
}

function showValentine() {
    game.showValentine();
}

function resetGame() {
    // Полная очистка localStorage
    localStorage.clear();
    
    // Явный сброс всех параметров
    const resetParams = {
        hearts: 0,
        clickPower: 1,
        autoPower: 0,
        prices: {
            click: 10,
            auto: 50
        }
    };
    
    // Принудительное обновление состояния
    game.state = resetParams;
    
    // Сброс UI элементов
    document.getElementById('hearts').textContent = '0';
    document.getElementById('autoRate').textContent = '0';
    document.getElementById('clickPower').textContent = '1';
    document.getElementById('clickUpgrade').textContent = '10 ❤️';
    document.getElementById('autoUpgrade').textContent = '50 ❤️';
    document.getElementById('progress').style.width = '0%';
    document.getElementById('valentine').classList.add('hidden');
    document.getElementById('valentineBtn').classList.add('hidden');
    const container = document.getElementById('valentine');
    container.classList.add('hidden');
    console.log('Прогресс полностью сброшен!'); // Для отладки
}
