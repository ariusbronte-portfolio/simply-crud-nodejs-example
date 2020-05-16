const database = require('../../../../database/connection');

const userService = {
    get: async function get() {
        const query = 'SELECT * FROM Users ORDER BY Id';

        return new Promise(async (resolve, reject) => {
            await database.query(query, [], (e, rows) => {
                if (e) return reject(e);
                else resolve(rows);
            });
        });
    }
}

module.exports.userService = userService;