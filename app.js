
const axios = require('axios');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        descrip: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;
console.log(argv.direccion);


const instance = axios.create ({
    baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/location.php?location=Colon, Argentina',
    headers: {'x-rapidapi-key':'3b6a9c8177msh327d3cfe9e9b827p1a0f3cjsn6a005cbb80c9'}

});

instance.get()
    .then( resp => {
        console.log(resp.data);
    })
    .catch(err => {
        console.log('Error', err);
    });