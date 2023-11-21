import axios from 'axios';

//BASE DA URL: https://api.themoviedb.org/3/
//API DA URL: /movie/now_playing?api_key=cff49d18b75fa044cc5538867451adbe&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;
