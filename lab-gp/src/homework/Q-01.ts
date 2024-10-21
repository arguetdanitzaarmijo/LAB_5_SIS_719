(() => {

  /* NOMBRE CORRECTAMETE LAS SIGUIENTES VARIABLES 
    ADEMAS DE COMPROBAR SI USA LET O CONST,
    SE PUEDE REFACTORIZAR, ETC.
  */
   //  Se usa  const para valores que no deben cambiar (como constantes matemáticas o configuraciones inmutables).
   // Se usaUsa let para variables que pueden cambiar durante la ejecución del programa.

  //lista de emails de usuarios de Meta-X
  const listEmails: Array<string> = [
      "email1@gmail.com", 
      "email1@gmail.com", 
      "email1@gmail.com",
  ];

  console.log(listEmails);


//tanto let como const pueden utilizarse para declarar arreglos de objetos en TypeScript. 
  //Lista de compras de un carrito
  const shoppingCartItems: Array<Object> = [
      {product: "switch"},
      {product: "X-box Controller"},
      {product: "steam-gift-card"},
  ];
  console.log(shoppingCartItems);
  

  //funcion para sumar mas 3 a un numero y retornarlo
  const AddThree = (num : number): number => {
      return num+ 3;
  }
  console.log(AddThree (2));
  
  
  //funcion para capitalizar una palabra pasara por params
  //idente o refactorice de ser necesario
  //el resultado no deberia cambiar
  function capitalizeFirstLetter(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

console.log(capitalizeFirstLetter("capricorn"));// Debería mostrar "Capricorn"

  
  //variable que alerta en caso de que algun evento suceda
const alertEvent: boolean = true;
  if (alertEvent) {
    console.log('event');
}
    //principalmente no ocurriria nada ya que la variable alertEvent inicializa en false.


  //variable que se encarga de verificar 
  //si un usuario puede acceder o no
 //si un usuario puede acceder o no
const isLogged: boolean = true;
  if (isLogged) {
    console.log('welcome');
}
 // let c: boolean = true;
//  if(c) console.log('welcome');
  
  //variable para hallar el promedio de 3 numeros

const calculateAverage: number = (1 + 2 + 3) / 3;
console.log(calculateAverage);
  
   //  Se usa  const para valores que no deben cambiar (como constantes matemáticas
  //variable que almacena el valor de PI
  const PI: number = Math.PI;
  console.log(PI);
     //  Se usa  const para valores que no deben cambiar (como constantes matemáticas
  

  //variable  que controla si un archivo es modificable 
 // let Bv: boolean = false;

  //if(Bv) console.log('edit this file?');

  const  fileIsEditable: boolean = true;
  if (fileIsEditable) {
      console.log('edit this file?');
  }
  //variable para almacenar el valor de e
  const e: number = Math.E; 
  console.log(e);


})();