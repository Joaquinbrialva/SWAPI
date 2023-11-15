import axios from 'axios';

interface Item {
    url: string;
    edited: string;
}

const getApiData = async (url: string, model: any): Promise<void> => {
    try {
        let nextUrl: string | null = url;

        while (nextUrl) {
            const response: any = await axios.get(nextUrl);
            const data: Item[] = response.data.results;

            if (data) {
                for (const item of data) {
                    const existingDoc = await model.findOne({ url: item.url });

                    if (existingDoc && item.edited !== existingDoc.edited) {
                        await model.findOneAndUpdate({ url: item.url }, item);
                    } else {
                        const collection = new model(item);
                        await collection.save();
                    }
                }

                nextUrl = response.data.next;
            } else {
                console.log('No se recibio respuesta de SWAPI.');
            }
        }
    } catch (error) {
        console.log('Error al obtener datos de la API:', error);
    }
};

export default getApiData;