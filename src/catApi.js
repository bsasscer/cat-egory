import axios from 'axios';

export function fetchRandomCat() {
    // TODO - fetch json from the http://aws.random.cat/meow or a similar random cat API
    const request = axios.get('https://aws.random.cat/meow');
    return request
        .then(response => {
            return response;
        })
        .catch(error => {
            console.error(error);
            return Promise.reject(error);
        });
}
