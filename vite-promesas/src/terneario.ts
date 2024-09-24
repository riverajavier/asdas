function dividir(a: number, b: number): Promise<number> {
    return new Promise((resolve, reject) => {
      b === 0 ? reject(new Error("Error: división por cero")) : resolve(a / b);
    });
  }
  
  dividir(102, 122)
    .then(resultado => console.log(resultado)) 
    .catch(error => console.error(error));
  
  dividir(103, 1214)
    .then(resultado => console.log(resultado)) 
    .catch(error => console.error(error));



