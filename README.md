# Test práctico para aspirar al área de front-end en Mercado Libre

Se desarrolla un buscador donde se puede ingresar el objeto a buscar y encontrar diferentes precios y modelos del mismo, además de poder visualizar al detalle cada uno de ellos, también con la posibilidad de ingresar directamente con el id a un objeto y ver su detalle

## Tecnologías implementadas

El proyecto se desarollo haciendo uso de **NodeJS** (16.13.1) con el framework **Express** (4.17.3) por parte del Backend y **React** (18.0) como framework por el lado del Frontend.

Se uso la metología de Atomic Design creada por **Brad Frost** para la organización y estructura del proyecto, esta propone dividir entre atomos, moleculas, organismos y vistas los componentes para tener una mejor reusabilidad, escalabilidad y organización. Para conocer más sobre la metodología en [**Atomic Design**](https://bradfrost.com/blog/post/atomic-web-design/)

## Requisitos

#### FrontEnd (React)

Crear tres vistas con sus propias URLs donde se pueda navegar dentro de la App,

* Barra de búsqueda: "/"
* Listar resultados: "/items?search"
* Detalle de un producto: "/items/:id"

#### Backend (NodeJs - Expres)

Implementar dos endpoints para ser consumidos por parte del front

* "api/items?q=:query"
* "api/items/:id"

## Instalación y ejecución

Es necesario tener instalado [**NodeJs**](https://nodejs.org/) y seguir los siguientes pasos:

Clonar el repositorio
```shell
git clone https://github.com/SebasGarcia20/test-frontend-meli.git
```
Posicionar se dentro de la raíz del proyecto y ejecutar el comando npm install, así instalar las dependencias del proyecto
```shell
npm install
```
Para iniciar el proyecto se usa el comando npm run dev (en la raíz del proyecto)  el cual ejecuta dos comandos gracias a la libreria concurrently, donde por un lado iniciar el servidor en el **localhost:3001** y abre en el navegador el front en **localhost:3000** así inicia los dos procesos con un solo comando
```shell
npm run dev
```
------
Si no se logra instalar y ejecutar la aplicación con el comando anteior, el otro proceso a seguir es ejecutar individualmente el backend y frontend en dos consolas, para ellos se abre una consola y se ejecuta el servidor posicionado en la carpeta raíz el comando
```shell
node server.js
```
Y en otra consola el siguiente comando para ejecutar el frontend
```shell
npm start
```
Así es otra forma de ejecutar la aplicación

## Contacto

Para contactarme puede ser por los siguientes medios:

* Correo: garciaflorez.sebastian@gmail.com
* linkedin: [sebasflorez99](https://www.linkedin.com/in/sebasflorez99/)



