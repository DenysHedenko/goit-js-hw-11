import axios from 'axios';

const API_KEY = '53386491-b3a2590d4f5418fef9d867789';
const BASE_URL = 'https://pixabay.com/api/';


export function getImagesByQuery(query) {
    const PARAMS = {
    q: query,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    };

    return axios.get(BASE_URL, { params: PARAMS })
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
    
}