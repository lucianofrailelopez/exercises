
/* a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en
mayúscula (utilizar toUpperCase). */

var text_1 = "hola planeta"

console.log(text_1.toUpperCase());

/* b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar
substring). */

var text_2 = "Hola América";

console.log(text_2.substring(0,5));

/* c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar
substring). */

var text_3 = "Día de verano"

console.log(text_3.substring(0,3));

/* d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en
una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +). */

var text_4 = "noche de verano";

console.log(text_4.substring(0,1).toUpperCase() + text_4.substring(1).toLowerCase());

/* e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar
indexOf). */

var text_5 = "Dias calurosos";

console.log(text_5.indexOf(" "));

/* f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún
espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un
nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás
letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el
operador +). */

var text_6 = "futbol amor"

console.log(text_6.substring(0,1).toUpperCase() + text_6.substring(1,6).toLowerCase(), text_6.indexOf(" "), text_6.substring(7,8).toUpperCase() + text_6.substring(8).toLowerCase());
