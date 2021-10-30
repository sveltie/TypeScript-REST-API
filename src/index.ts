import 'dotenv/config';
require('express-async-errors');
import express from 'express';
import ConnectDB from './utils/connect';

import IndexRoutes from './routes/IndexRoutes';

class Server {
    public app: express.Application;
    public port: number;

    constructor() {
        this.app = express();
        this.port = 5050;
        this.routes();
    };

    public config(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    };

    public routes(): void {
        const router: express.Router = express.Router();

        this.app.use('/', IndexRoutes);
        
    };

    public start(): void {
        const MONGO_URI = process.env.MONGO_URI;
        new ConnectDB(MONGO_URI as string);
        this.app.listen(this.app.listen(this.port), () => {
            console.log(`Server is running on http://localhost:${this.port}`);
        });
    };
};

const server = new Server();
server.start();