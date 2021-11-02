import { Schema, model, Model, Document } from 'mongoose';

export interface ICharacter extends Document {
    name: string;
    birthday: string;
    nation: string;
};

const characterSchema = new Schema<ICharacter>({
    name: {
        type: String,
        required: [true, 'Please provide the character name.']
    },
    birthday: {
        type: String,
        required: [true, 'Please provide the character birthday.']
    },
    nation: {
        type: String,
        required: [true, 'Please provide the character nation.']
    },
});

export const Character: Model<ICharacter> = model<ICharacter>('Character', characterSchema);