const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;

app.use(express.json());
app.use(require('./routes/books.route'));
app.use(require('./routes/authors.route'))
 app.use(require('./routes/reviews.route'))
app.use(require('./routes/genres.route'))

mongoose.connect('mongodb+srv://hasashi:hasashi@cluster0.hnnkubs.mongodb.net/Books')
.then(() => console.log('Успешно подключено'))
.catch(() => console.log('Не удалось подключиться'));

app.listen(port, () => {
    console.log(`Успешно подключено к серверу http://localhost${port}`)
});