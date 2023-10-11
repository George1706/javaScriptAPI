const axios = require('axios')

//definir url de la api
const url = `https://rickandmortyapi.com/api/character`

//ejecutar transacción async
axios.get( url )
    .then( (respuesta) => {
        console.log(respuesta.data.results)
    })
    .catch( (error) => {
        console.log(error)
    })