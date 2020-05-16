const database = require('../../../../database/connection');

require('../../../../extensions/dateExtensions');

const userService = {
    get: async function get() {
        const query = 'SELECT * FROM Users ORDER BY Id';

        return await database.makeQuery(query);
    },
    post: async function post(values) {
        const query = `INSERT INTO Users (FirstName, LastName, CreationHistory) VALUES (?, ?, '${new Date().toUTC()}')`;

        return await database.makeQuery(query, values);
    }
}

module.exports.userService = userService;