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

Es necesario tener instalado [**NodeJs**](https://nodejs.org/) y seguir los siguientes pasos, hay tres formas para levantar la aplicación, una por medio del uso de Dockers, otra por un comando simultaneo que hace funcionar el back y front y la mas basica la cual es en dos consolas diferentes andar el front y el back, a continuación se muestra las tres formas y los pasos a seguir:

### Método Docker

Para esta es necesario tener docker instalado y además abierto, el primer paso es,

Clonar el repositorio
```shell
git clone https://github.com/SebasGarcia20/test-frontend-meli.git
```
Posicionar se dentro de la raíz del proyecto y ejecutar el comando docker-compose up, este hará andar el back y front ambos en un docker
```shell
docker-compose up
```
Esto correra el backend en el puerto **localhost:3001** y el frontend en **localhost:3000** todo de manera automatica, ya que internamente hace uso de los comandos npm install para instalar las dependencias del proyecto.

------

### Método comando concurrente

Este método hace andar dos comandos al mismo tiempo, es decir el back y el front en una mismo comando, así instalar y hacer funcionar la app de manera sencilla, primero es necesario clonar el repositorio

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
### Método básico, correr los comandos del back y front en diferentes consolas

Este método es el más basico, donde se hace funcionar el back y el front en consolas diferentes, primero es necesario clonar el respositorio

```shell
git clone https://github.com/SebasGarcia20/test-frontend-meli.git
```
Posicionar se dentro de la raíz del proyecto y ejecutar el comando npm install, así instalar las dependencias del proyecto

```shell
npm install
```

Luego ejecutarr individualmente el backend y frontend en dos consolas diferentes, para ellos se abre una consola y se ejecuta el servidor posicionado en la carpeta raíz el comando

```shell
node server.js
```
Y en otra consola el siguiente comando para ejecutar el frontend

```shell
npm start
```

## Contacto

Para contactarme puede ser por los siguientes medios:

* Correo: garciaflorez.sebastian@gmail.com
* linkedin: [sebasflorez99](https://www.linkedin.com/in/sebasflorez99/)



