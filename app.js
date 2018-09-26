
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: 'Direccion de la ciudad para obtener el clima',
            demand: true
        }
    }).argv;


// lugar.getLugar( argv.d )
//     .then(  res =>{
//         return clima.getClima( res.lat , res.lng );
//     })
//     .then( respuesta =>{
//         console.log( respuesta );
//     })
//     .catch( err =>{
//         console.error(  err  );
//     });


let getInfo = async(  descripcion )=>{
    
    try {
        let cor = await lugar.getLugar( descripcion );
        let temp = await clima.getClima(  cor.lat , cor.lng );
    
        return `El clima en ${ descripcion } es de  ${ temp }`;
        
    } catch (error) {
        return `No se pudo determinar el clima de ${ descripcion }`;
    }
}

getInfo(  argv.d )
        .then( r =>{
            console.log( r );
        })
        .catch( e =>{
            console.error( e );
        });
