
const fs=require('fs');
const colors = require('colors');


const CrearArchivo = (base, listar, hasta) => {

    return new Promise((resolve, reject)=>{
        let salida='';

        for(let i=1;i<=hasta;i++){
            salida += `${base} * ${i} = ${base * i}\n`.rainbow;
        }

        if(listar){
            console.log(`Tabla del ${base}`);
            console.log(salida);
        }


        fs.writeFileSync(`salida/tabla-${base}.txt`, salida); 

        resolve(`tabla-${base}.txt`);
    })
    
    
}

module.exports = {
    CrearArchivo
}