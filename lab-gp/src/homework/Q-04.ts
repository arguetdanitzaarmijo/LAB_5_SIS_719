(() => {

  /* APLICA DRY */
  
  //EX - 1

  function calculateOperation(a: number, b: number, c: number): number {
        let sumResult = a + b;
        let multiplicationResult = sumResult * c;
        return multiplicationResult;
}

const result1 = calculateOperation(2, 3, 4); // Resultado: 20
const result2 = calculateOperation(5, 6, 2); // Resultado: 22
  
console.log(result1);
console.log(result2);

//Con esta funcion hacemos los calculos necesarios para variables que pueden ser tanto como a,b,c o x,y,z 

// EX - 2

  type AreaCalculator =(dimensions: number [])=>number 
  
  function calculateArea(calculator: AreaCalculator, ...dimensions:number[]): number {
    return calculator(dimensions);
  }
 const calcuLateRectangleArea: AreaCalculator =([length, Width]) => length*Width;
 const calculateCircleArea: AreaCalculator =([radius])=>Math.PI*radius*radius;
  
 console.log(calculateArea(calcuLateRectangleArea, 2, 2)); //4
 console.log(calculateArea(calculateCircleArea, 3)) //28.274333882308138
  
  // EX - 3
  //No es necesario aumentar codigo en este ejercicio
  function validate<T>(input: T, validationFunction: (value: T) => boolean): boolean {
    return validationFunction(input);
}

function validateEmail(email: string): boolean {
    // ...código para validar aquí
    return validate(email, (value: string) => {
        return true;
    });
}

function validateUsername(username: string): boolean {
    // ...código para validar aquí
    return validate(username, (value: string) => {
        return true;
    });
}

// Prueba las funciones
const emailResult = validateEmail("test@example.com");
const usernameResult = validateUsername("user123");

console.log(`Resultado de la validación de correo electrónico: ${emailResult}`);
console.log(`Resultado de la validación de nombre de usuario: ${usernameResult}`);


})();