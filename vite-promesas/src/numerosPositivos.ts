function numerosPositivos (a: number, b: number):Promise<number>{
    if (a >= 0 && b >= 0){
        return Promise.resolve(a+b);
        } else{
            return Promise.reject("Error:Uno de los numeros es negativo");
        }
    }

    numerosPositivos(2,3)
    .then (resultado => console.log(resultado))
    .catch (resultado => console.log(resultado));
