require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');

const usersRoutes = require('./routes/users');
const dokterRoutes = require('./routes/dokter');
const bookRoutes = require('./routes/book');
const port = process.env.PORT || 4000

const MiddlewareLogRequest = require('./middleware/logs');

const app = express();
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type', 'application/json');
    next();
})

app.use(bodyParser.json());

app.use(MiddlewareLogRequest);
app.use(express.json());
app.use('/api/users', usersRoutes);
app.use('/api/dokter', dokterRoutes);
app.use('/api/book', bookRoutes);

var server = app.listen(port, () => {
    console.log(`Server berhasil di running di port ${port}`);
})
server.keepAliveTimeout = 30000;