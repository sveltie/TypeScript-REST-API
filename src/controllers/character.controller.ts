import { Request, Response } from 'express';
import { Character } from '../models/character.model';

class CharacterController {
    
    public async getAllCharacters(req: Request, res: Response): Promise<void> {
        const result = await Character.find();
        res.json({ result });
    };

    public async getCharacter(req: Request, res: Response): Promise<void> {
        const result = await Character.find({ url: req.params.url });
        res.json({ result });
    };

    public async createCharacter(req: Request, res: Response): Promise<void> {
        //
    };

    public async updateCharacter(req: Request, res: Response): Promise<void> {
       //
    };

    public async deleteCharacter(req: Request, res: Response): Promise<void> {
       //
    };
}