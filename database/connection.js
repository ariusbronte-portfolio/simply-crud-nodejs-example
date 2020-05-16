const mysql = require('mysql');

const database = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

database.connect(e => {
    if(e) throw e;

    console.log('successfully connecting to the database');
});

database.makeQuery = function makeQuery(query, values = []) {
    return new Promise(async (resolve, reject) => {
        await database.query(query, values, (e, rows) => {
            if (e) return reject(e);
            else resolve(rows);
        });
    });
}

module.exports = database;
