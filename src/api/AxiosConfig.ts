import axios from 'axios';

// Config (look to extract this...)
export const baseUrl: string = 'http://geofinderapi-env.eba-3rdcbp94.us-east-1.elasticbeanstalk.com';

// Ressources URLs
export const suggestionsResourceUrl: string = '/suggestions';
// Axios instance
const instance = axios.create({
    baseURL: baseUrl
});
export default instance;
