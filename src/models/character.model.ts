import { Schema, model } from 'mongoose';

interface ICharacter {
    name: string;
    birthday: string;
    constellation?: string;
    nation: string;
    affiliation?: string;
    special_dish?: string;
    img: string;
};

const characterSchema = new Schema<ICharacter>({
    name: {type: String, required: true},
    birthday: {type: String, required: true},
    constellation: String,
    nation: {type: String, required: true},
    affiliation: String,
    special_dish: String,
    img: {type: String, required: true}
});

export const Character = model<ICharacter>('Character', characterSchema);