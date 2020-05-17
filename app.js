require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const {ErrorHandler, handleError} = require("./helpers/error");

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api/v1/users', require('./routes/v1/controllers/users'));

app.use((err, req, res, next) => {
    handleError(err, res);
});

app.listen(port, () => {
    console.log(`the server is running on port ${port}`);
});

