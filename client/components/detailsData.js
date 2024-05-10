import axios from 'axios';

const getDetailsData = async (id) => {
    try {
        const response = await axios.get('http://localhost:3000/api/products/' + id);
        const values = response.data;

        return values;
    }
    catch (error) {
        console.error(error);

        return [];
    }
    
}

export default getDetailsData;