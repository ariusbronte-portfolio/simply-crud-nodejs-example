const database = require('../../../../database/connection');

const userService = {
    get: async function get() {
        const query = 'SELECT * FROM Users ORDER BY Id';

    }
}

module.exports.userService = userService;