# Api de usuarios
Está es una API de Usuarios permite gestionar la información de usuarios en una aplicación web. Proporciona endpoints para crear, leer, actualizar y eliminar usuarios (CRUD). 
Esta API está diseñada para ser sencilla y eficiente, facilitando la integración con diversas aplicaciones.

puede visitarla accediendo al siguiente link: https://backend-optimal-technology.onrender.com/


# Despligue de la aplicación
La aplicación está desplegada en Render, un servicio de infraestructura en la nube que simplifica la implementación de aplicaciones web. Render ofrece escalabilidad automática, despliegue continuo y una experiencia de usuario intuitiva.
<br> <br>
https://backend-optimal-technology.onrender.com/

# Las tecnologías utilizadas
<ul>
  <li>Nodejs</li>
  <li>Express</li>
  <li>Sequelize</li>
  <li>Docker</li>
</ul>

# Instrucciones para ejecutar la aplicación localmente 

1) Clonar este repositorio https://github.com/bonettrenzo/backend-optimal-technology.git
2) Navega al directorio del proyecto cd backend-optimal-technology.
3) Instalar las dependencias con npm install.
4) para correr la aplicación solo basta con poner en la consola npm start.

Con estos comando la aplicación ya está lista para ser utilizada por defecto la aplicación se ejecuta en el puerto 5930, 
en el que se va a ejecutar la aplicación debe acceder, `http://localhost:5930/`

en caso que el usuario desee cambiar el puerto de la aplicación debe.

5) acceder al directorio raíz de la aplicación y en el archivo .env debe buscar la variable que tiene por nombre NODE_PORT_APLICATION, y reemplarla el valor por el que desee.

# Testing
Para realizar pruebas de los endpoints, hemos utilizado Jest junto con Supertest para simular las solicitudes HTTP. Puedes ejecutar las pruebas utilizando el siguiente comando:

<ul>
  <li>
    <strong>npm test</strong>
  </li>
</ul>

Las pruebas están diseñadas para garantizar que los endpoints funcionen correctamente y manejen tanto los casos de éxito como los errores adecuadamente.

# Instrucciones para configurar la base de datos
por defecto la aplicación ya viene con el archivo .env para que el usuario, pueda configurar la api con su propia base de datos en caso que no requiera utilizar la que 
proporciona la api por defecto.

solo debe acceder al directorio raíz de la aplicacion y en el archivo .env reemplazar los valores de las siguiente variables:

<ul>
  <li>NODE_DATABASE= tu_nombre_db</li>
  <li>NODE_PORT= tu_puerto_db</li>
  <li>NODE_USER= tu_usuario_db</li>
  <li>NODE_HOST= tu_host_db</li>
  <li>NODE_PASSWORD= tu_password_db</li>
</ul>

# Cómo probar los endpoints
Para probar los endpoints de la API, puedes utilizar herramientas como Postman o Insomnia <br>

1) ### Obtener todos los registros
 <ul>
   <li> <strong>Método:</strong> GET</li>
   <li> <strong>Enpoint: </strong> /v1/users/ </li>
   <li> <strong>Url: </strong> http://localhost:5930/v1/users/</li>
 </ul>

2) ### Obtener registro por ID
 <ul>
   <li> <strong>Método:</strong> GET</li>
   <li> <strong>Enpoint: </strong> /v1/users/ </li>
   <li> <strong>Url: </strong> http://localhost:5930/v1/users/1</li> <br>(reemplaza 1 con el ID deseado)
 </ul>

 3) ### Crear un usuario
 <ul>
   <li> <strong>Método:</strong> POST</li>
   <li> <strong>Enpoint: </strong> /v1/users/ </li>
   <li> <strong>Url: </strong> http://localhost:5930/v1/users/</li>
 </ul>
 
  En la pestaña "Body", selecciona raw y elige JSON en el menú desplegable

Agrega el json con la siguiente estructura <br>
`  {
"nombre": "nombre del usuario",
}`

 4) ### Actualizar un usuario
 <ul>
   <li> <strong>Método:</strong> PUT</li>
   <li> <strong>Enpoint: </strong> /v1/users/1 </li>
   <li> <strong>Url: </strong> http://localhost:5930/v1/users/:ID</li>
 </ul>
 
 (reemplaza el ID deseado)

  En la pestaña "Body", selecciona raw y elige JSON en el menú desplegable

Agrega el json con la siguiente estructura <br>
`  {
"nombre": "nombre del recurso actualizar",
}`

 5) ### Eliminar un usuario
 <ul>
   <li> <strong>Método:</strong> DELETE</li>
   <li> <strong>Enpoint: </strong> /v1/users/1 </li>
   <li> <strong>Url: </strong> http://localhost:5930/v1/users/:ID</li> <br>
    (reemplaza el ID deseado)
 </ul>

# Autor
RENZO BONETH
