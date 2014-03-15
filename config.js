// # Ghost Configuration
// Setup your Ghost install for various environments

var path = require('path'),
    config;

config = {
    development: {
        url: 'http://my-ghost-blog.com',
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-dev.db')
            },
            debug: false
        },
        server: {
            host: '127.0.0.1',
            port: '2368'
        }
    },
    production: {
        url: process.env.MY_URL,
        mail: {
            transport: 'sendgrid',
            host: 'smtp.sendgrid.net',
            options: {
                service: 'Sendgrid',
                auth: {
                    user: process.env.SENDMAIL_USERNAME,
                    pass: process.env.SENDMAIL_PASSWORD
                }
            }
        },
        database: {
            client: 'pg',
            connection: process.env.DATABASE_URL,
            debug: false
        },
        server: {
            host: '0.0.0.0',
            port: process.env.PORT
        }
    }
};

// Export config
module.exports = config;