const axios = require('axios');


let getClima = async( lat, lng )=>{

    let clima  = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=f369635965b00ad16ced5da4da4b9f3b`);
    
    if( clima.data.cod !== 200 ){
        throw new Error(`Error al obtener el clima con la latitud ${ lat } y longitud ${lng}`);
    }

    return clima.data.main.temp;
}


module.exports = {
    getClima
}