require('dotenv').config({ path: './server/server.config.env'});

const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const helmet = require('helmet');

/** if true, then dev environment */
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

/** Custom API */
const mailer = require('./server/lib/mailer');
const gh = require('./server/lib/gh');


app.prepare()
.then(() => {
    const server = express();

    // Establish CORS / XSS protection
    // server.use(cors());
    server.use(helmet());

    // Parse URL encoded OR json bodies of data
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(bodyParser.json());

    server.use('/api', [mailer, gh]);

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(process.env.PORT, (err) => {
        if(err) throw err;
        console.log(`Ready on http://${process.env.DOMAIN}:${process.env.PORT}`);
    });

})