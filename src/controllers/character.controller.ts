import { Request, Response } from 'express';
import { Character, ICharacter } from '../models/character.model';

export class CharacterController {
    
    public async getAllCharacters(req: Request, res: Response): Promise<void> {
        const characters = await Character.find();
        res.json({ characters });
    };

    public async getCharacter(req: Request, res: Response): Promise<void> {
        const character = await Character.findOne({ name: req.params.characterName });
        if (character) {
            res.json(character);
        } else {
            res.send(`No character with the name ${req.params.characterName} found`);
        }
    };

    public async createCharacter(req: Request, res: Response): Promise<void> {
        const newCharacter: ICharacter = new Character(req.body);
        await newCharacter.save();
        res.json({ status: res.status, data: newCharacter });
    };

    public async updateCharacter(req: Request, res: Response): Promise<void> {
        const character = await Character.updateOne({ name: req.params.name }, req.body);
        if (character) {
            const newCharacter: ICharacter = {
                name: req.params.name,
                ...req.body
            };
            res.json({ status: res.status, data: newCharacter });
        } else {
            res.send(`No character with the name ${req.params.characterName} found`);
        };
    };

    public async deleteCharacter(req: Request, res: Response): Promise<void> {
        const character = await Character.deleteOne({ name: req.params.characterName });
        if (character) {
            res.json({ response: "Character deleted Successfully" });
        } else {
            res.send(`No character with the name ${req.params.characterName} found`);
        };
    };
};