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
  const AddThree = (n: number): number => {
      return n + 3;
  }
  console.log(AddThree (2));
  
  
  //funcion para capitalizar una palabra pasara por params
  //idente o refactorice de ser necesario
  //el resultado no deberia cambiar
  function capitalizeWord(word: string): string {
    // Convierte toda la palabra a minúsculas
     word = word.toLowerCase();
     // Capitaliza la primera letra y concatena el resto de la palabra
      const capitalizedWord= word.charAt(0).toUpperCase() + word.substring(1);
       return capitalizedWord;
}
 console.log(capitalizeWord("capricorn")); // Debería mostrar "Capricorn"

  
  //variable que alerta en caso de que algun evento suceda
  const  alertEvent: boolean = true;

      if(alertEvent) {
      console.log('event');
      }
    //principalmente no ocurriria nada ya que la variable alertEvent inicializa en false.


  //variable que se encarga de verificar 
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
  const pi: number = 3.141592654;
  console.log(pi);
     //  Se usa  const para valores que no deben cambiar (como constantes matemáticas
  

  //variable  que controla si un archivo es modificable 
 // let Bv: boolean = false;

  //if(Bv) console.log('edit this file?');

  const  cantEdit: boolean = true;
  if (cantEdit) {
      console.log('edit this file?');
  }
  //variable para almacenar el valor de e
  const euler: number = 2.718281828; 
   console.log(euler);


})();