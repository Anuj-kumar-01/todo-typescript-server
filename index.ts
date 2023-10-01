import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { DataSource } from 'typeorm';

import { StatusCodes } from 'http-status-codes';

dotenv.config();

// Instantiate Express App
const app: Express = express();

// Create Database  Connection
export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
});

// Define Server Port
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
    res.status(StatusCodes.OK).send('Hello World!');
});

AppDataSource.initialize()
    .then(() => {
        // Start Server listenting on the defined port
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
        console.log('Database connected');
    })
    .catch((error) => {
        console.error('Error during Data Source initialization', error);
    });
