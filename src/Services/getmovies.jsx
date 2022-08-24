const axios = require('axios').default;

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '144c01915625ec70297b77a615cc2ea7';

export const getMovies = async (searchOption) => {
    try {
        const response = await axios.get(`${API_URL}${searchOption}?api_key=${API_KEY}`);
        return response;
    } catch (error) {
        return console.error(error.message);
    }
};

