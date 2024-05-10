import axios from 'axios';

const getProductData = async () => {
    try {
        const response = await axios.get('http://localhost:3000/api/products');
        const values = response.data;

        return values;
    }
    catch (error) {
        console.error(error);

        return [];
    }
    
}

export default getProductData;