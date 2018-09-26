const axios = require('axios');


let getLugar = async (  descripcion ) => { // convertir en promesa con async

    let encodedUrl = encodeURI( descripcion  );
    // esoerar datos con await
    let respuesta =  await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`);
        
    if( respuesta.data.status === "ZERO_RESULTS"){
        throw new Error(`No hay resultados para la ciudad ${ descripcion }`);
    }

    let data = respuesta.data.results[0];
    let coors = data.geometry.location; 

    return {
        direccion : data.formatted_address,
        lat : coors.lat,
        lng : coors.lng
    }

}

module.exports = {
    getLugar
}