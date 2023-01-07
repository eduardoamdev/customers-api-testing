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

- Vamos a realizar un test de prueba para confirmar el proceso se ha realizado correctamente. Para ello, crearemos un archivo con la extensión ".test.js". En mi caso el test va a comprobar una suma de modo que lo llamo "suma.test.js". El contenido del archivo será el siguiente:

```js
test("Addition", () => {
  expect(1 + 1).toEqual(2);
});
```

- A continuación lanzaremos desde nuestra terminal el comando:

```sh
npm run test
```

- Acto seguido, comprobaremos que la ejecución del comando nos devuelve que el test ha sido pasado con éxito:

<img src="./images/first-test-result.png" alt="first test result" />
