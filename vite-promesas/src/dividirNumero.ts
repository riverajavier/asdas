function dividir(a: number, b: number): Promise<number> {
    return new Promise((resolve, reject) => {
      if (b === 0) {
        reject("Error: división por cero");
      } else {
        resolve(a / b);
      }
    });
  }

  dividir(10, 2)
  .then(resultado => console.log(resultado)) 
  .catch(error => console.error(error));

dividir(10, 4)
  .then(resultado => console.log(resultado)) 
  .catch(error => console.error(error)); 