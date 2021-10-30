import mongoose from 'mongoose';

class ConnectDB {
    private MONGO_URI: string;

    constructor(MONGO_URI: string) {
        this.MONGO_URI = MONGO_URI;
        this.connectDB();
    };

    public connectDB(): void {
        mongoose.connect(this.MONGO_URI)
            .then(() => {
                console.log(`Successfully connected to the database.`);
            })
            .catch((error) => {
                console.log(error)
            });
    };
};

export default ConnectDB;