require('express-async-errors');

import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';

import compression from "compression";
import cors from "cors";

import { IndexRoutes } from './routes/IndexRoutes';
import { CharacterRoutes } from './routes/character.route';
import { Character as model } from './models/character.model';

class Server {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
        this.connectMongo();
    };

    public routes(): void {
        this.app.use('/', new IndexRoutes().router);
        this.app.use('/api/characters', new CharacterRoutes().router);
    };

    public config(): void {
        this.app.set('port', process.env.PORT || 5050);
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(compression());
        this.app.use(cors());
    };

    private connectMongo(): void {
        const run = async (): Promise<void> => {
            await mongoose.connect(process.env.MONGO_URI as string);
        };

        run()
            .then(() => {
                console.log(`Successfully connected to the ${model.db.name} database.`);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    public start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server is running on http://localhost:${this.app.get('port')}`);
        });
    };
};

const server = new Server();
server.start();