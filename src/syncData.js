const { getApiData } = require('./getApiData');

// syncData se encarga de ejecutar la funcion que trae los datos de SWAPI y pasarle las urls y los modelos.
const syncData = async (urls, models) => {
    const rotations = ['|', '/', '-', '\\'];
    let rotationIndex = 0;

    const rotationInterval = setInterval(() => {
        process.stdout.write(`Sincronizando datos ${rotations[rotationIndex]}\r`);
        rotationIndex = (rotationIndex + 1) % rotations.length;
    }, 100);

    try {
        for (let i = 0; i < urls.length; i++) {
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

module.exports = { syncData };