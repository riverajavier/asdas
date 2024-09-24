console.log ('inicio');
//la promesa usualmente se usa con funciones de flecha
new Promise((resolve, reject)=>{
    //console.log('cuerpo de la promesa');
    setTimeout(()=>{
            resolve('promesa cumplida');
            reject('promesa no cumplida');
          
         
        },1000);
    }).then ((mensaje)=> console.log(mensaje))
    .catch((mensajeError)=>console.warn(mensajeError))
    .finally(()=>console.log('fin de la promesa')); 



    //resolve('promesa cumplida');
    //}).then((mensaje)=>console.log(mensaje))
console.log('fin');


//invetigar que es el operador ternario
//consectos
//funcion flecha
//callback arrow



















sumarNumeros(2, 3)
  .then((resultado) => console.log(resultado)) // imprime 5
  .catch((error) => console.error(error));

sumarNumeros(-2, 3)
  .then((resultado) => console.log(resultado))
  .catch((error) => console.error(error)); // imprime "Error: uno de los números es negativo"




















function sumarNumeros(a: number, b: number): Promise<number> {
    if (a >= 0 && b >= 0) {
      return Promise.resolve(a + b);
    } else {
      return Promise.reject("Error: uno de los números es negativo");
    }
  }