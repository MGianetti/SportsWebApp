import axios from 'axios';

export default class Fetch{

    static async users() {
        let clientJsons = [];
        await axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => clientJsons = response.data)
            .catch(error => console.log(error.message));      
        return clientJsons;      
    }
    static async photos() {
        let photosJsons = [];
        await axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(response => photosJsons = response.data)
            .catch(error => console.log(error.message));      
        return photosJsons;      
    }
    static async albuns() {
        let albunsJsons = [];
        await axios.get('https://jsonplaceholder.typicode.com/albuns')
            .then(response => albunsJsons = response.data)
            .catch(error => console.log(error.message));      
        return albunsJsons;      
    }
    
}
