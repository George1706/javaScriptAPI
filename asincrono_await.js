const axios = require('axios')

//definir url de la api
const url = `http://universities.hipolabs.com/search?country=United+States`

const universidades = async() => {
    const response = await axios.get( url )
    let arreglo = response.data
    arreglo.forEach((universidades) => {
        console.log(universidades.name)
        console.log("---------------------")
})
}

universidades()