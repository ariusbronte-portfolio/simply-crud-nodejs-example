require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.use('/api/v1/users', require('./routes/v1/controllers/users'));

app.listen(port, () => {
    console.log(`the server is running on port ${port}`);
});