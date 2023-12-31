import { Model } from 'mongoose';
import getApiData from './getApiData';

const syncData = async (urls: string[], models: Model<any>[]): Promise<void> => {
    const rotations: string[] = ['|', '/', '-', '\\'];
    let rotationIndex: number = 0;

    const rotationInterval = setInterval(() => {
        process.stdout.write(`Sincronizando datos ${rotations[rotationIndex]}\r`);
        rotationIndex = (rotationIndex + 1) % rotations.length;
    }, 100);

    try {
        for (let i: number = 0; i < urls.length; i++) {
            try {
                await getApiData(urls[i], models[i]);
            } catch (error) {
                console.log(error);
            };
        }
        clearInterval(rotationInterval);
        console.log('Datos obtenidos y actualizados en la base de datos.');
    } catch (error) {
        clearInterval(rotationInterval);
        console.log('Error durante la sincronizacion de datos:', error);
    }
};

export { syncData };