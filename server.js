require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware для проверки пароля
const checkPassword = (req, res, next) => {
    if (req.path === '/login') return next();
    if (req.cookies.auth === 'true') return next();
    res.redirect('/login');
};

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(checkPassword);

// Страница входа
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
});

// Проверка пароля
app.post('/login', (req, res) => {
    if (req.body.password === process.env.SITE_PASSWORD) {
        res.cookie('auth', 'true').redirect('/game.html');
    } else {
        res.redirect('/login?error=1');
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
