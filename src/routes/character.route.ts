import { Router } from 'express';
import { CharacterController } from '../controllers/character.controller';

export class CharacterRoutes {
    public router: Router;
    public characterController: CharacterController = new CharacterController;

    constructor() {
        this.router = Router();
        this.routes();
    };

    routes(): void {
        this.router.get('/', this.characterController.getAllCharacters);
        this.router.get('/:characterName', this.characterController.getCharacter);
        this.router.post('/', this.characterController.createCharacter);
        this.router.patch('/:characterName', this.characterController.updateCharacter);
        this.router.delete('/:characterName', this.characterController.deleteCharacter);
    };
};