const axios = require('axios');

// Funcion para guardar los resultados de SWAPI en mi base de datos.
const getApiData = async (url, model) => {
    try {
        let nextUrl = url;

        while (nextUrl) {
            const response = await axios.get(nextUrl);
            const data = response.data.results;

            if (data) {
                for (const item of data) {
                    const existingDoc = await model.findOne({ url: item.url });

                    if (existingDoc && item.edited != existingDoc.edited) {
                        // Si el documento ya existe Y la propiedad edited del documento local es diferente a la que trae la API de Starwars, se actualiza el documento.
                        await model.findOneAndUpdate({ url: item.url }, item);
                    } else {
                        // Si no existe el documento, se crea.
                        const collection = new model(item);
                        await collection.save();
                    }
                }

                // Verifica si hay una pagina siguiente y configura la URL para la proxima llamada.
                nextUrl = response.data.next;
            } else {
                console.log('No se recibio respuesta de SWAPI.');
            }
        }
    } catch (error) {
        console.log('Error al obtener datos de la API:', error);
    }
};

module.exports = { getApiData };