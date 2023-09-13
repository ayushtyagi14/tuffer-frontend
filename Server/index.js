import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connect from './database/conn.js';
import router from './router/route.js';
import bodyParser from 'body-parser';

import dotenv from "dotenv"
dotenv.config();


const app = express();

/** middlewares */
app.use(express.json());
app.use(bodyParser.json({limit: "100mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "100mb", extended: true}));
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by'); // less hackers know about our stack


const port = 8080;

/** HTTP GET Request */
app.get('/', (req, res) => {
    res.status(201).json("You have reached the API, Surrender yourself, else you will face the wrath of Developer");
});



/** api routes */
app.use('/api', router)


/** start server only when we have valid connection */
// connect().then(() => {
    try {
        app.listen(port, () => {
            connect();
            console.log(`Server connected to http://localhost:${port}`);
        })
    } catch (error) {
        console.log(error)
    }
// }).catch(error => {
//     console.log("Invalid database connection...!");
// })

