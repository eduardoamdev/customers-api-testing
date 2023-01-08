# Testeo de un proyecto con Jest

<img src="./images/jest-image.png" alt="jest image" />

## Introducción

El objetivo de este repositorio es llevar a cabo el testing de un proyecto sencillo mediante el uso del framework Jest.
Jest es una herramienta de testing desarrollada por Facebook e ideada inicialmente para testear aplicaciones realizadas con React aunque, a día de hoy, es apto para ser utilizado en cualquier proyecto de Javascript y trabajar con código tanto en el lado del frontend como en el lado del backend.
Podemos encontrar la documentación de Jest en el siguiente enlace: https://jestjs.io/
También es muy recomendable revisar a fondo el repositorio de Github cuyo enlace dejamos a continuación: https://github.com/facebook/jest#getting-started

## Configuración:

La configuración de Jest destaca por ser especialmente secilla:

- En primer lugar, instalaremos Jest en nuestro proyecto como una dependencia de desarrollo mediante el comando:

```sh
npm i --save-dev jest
```

- El siguiente paso será indicar en el archivo package.json de nuestro proyecto que vamos a realizar los test empleando Jest. Para ello modificaremos el contenido de la propiedad "scripts" de la siguiente manera:

```js
"scripts": {
  "test": "jest"
}
```

## Primer test:

Vamos a realizar un test de prueba para confirmar el proceso se ha realizado correctamente.

En primer lugar, crearemos un un archivo .js dentro de nuestro proyecto (yo llamé al mío suma.js). En este archivo crearemos una función (en mi caso se trata de una función que recibe dos números como parámetros y devuelve la suma de ambos) para después exportarla. El contenido del archivo quedó de la siguiente manera:

```js
const suma = (num1, num2) => {
  return num1 + num2;
};

module.exports = { suma };
```

Lo siguiente que haremos será crear un archivo con extensión .test.js y testear la función. Para ello, la importaremos y llamaremos a la función "test". Esta función recibe dos argumentos. El primer argumento es el título de nuestro test y el segundo es un callback en cuyo cuerpo se ejucatará el test propiamente dicho.

```js
const { suma } = require("./suma");

test("Suma", () => {
  expect(suma(2, 3)).toEqual(5);
});
```

A continuación lanzaremos desde nuestra terminal el comando:

```sh
npm run test
```

Acto seguido, comprobaremos que la ejecución del comando nos devuelve que el test ha sido pasado con éxito:

<img src="./images/first-test-result.png" alt="first test result" />
