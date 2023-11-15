import mongoose from 'mongoose'

const dbConnect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/starwars');
        console.log('Conectado a MongoDB');
    } catch (error) {
        console.log('Error al conectar a MongoDB:', error);
    }
}

export default dbConnect;