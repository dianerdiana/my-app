const { Pool } = require('pg')

const dbPool = new Pool({
    // database: 'personal-web-b29',
    // port: 5432,
    // user: 'postgres',
    // password: '23514114'
    connectionString: 'postgres://qqrklpxoutcnwh:25c58fb744b2cc8b77f71273194027aa7e4fc54a2bd7fb214d6c58a98e77de12@ec2-52-45-238-24.compute-1.amazonaws.com:5432/d7pvi97qnn7a23',
    ssl: {
        rejectUnauthorized: false
    }
})

module.exports = dbPool