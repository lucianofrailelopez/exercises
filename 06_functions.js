/* a) Crear una función suma que reciba dos valores numéricos y retorne el resultado.
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha
variable en la consola del navegador. */

function suma(a,b) {
    return a + b;
}

console.log(suma(2,3));

/* b) A la función suma anterior, agregarle una validación para controlar si alguno de los
parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros
tiene error y retornar el valor NaN como resultado. */

function ejecutar(funcion){
    return suma();
}
 var funcion_suma = suma;

 resultado = ejecutar(funcion_suma);

 console.log(resultado);

 alert("Uno de los parámetros tiene error");

 /* c) Crear una función validate integer que reciba un número como parámetro y devuelva
verdadero si es un número entero. */

function fits(x) {
    if (Number.isInteger(x)) {
      return 'true';
    }
  }
  
  console.log(fits(10));

  /* d) A la función suma del ejercicio 6b) agregarle una llamada que valide que los números
sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el
número convertido a entero (redondeado). */

