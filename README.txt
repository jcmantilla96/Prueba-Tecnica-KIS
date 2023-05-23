Para que la página funcione correctamente, se deberá abrir usando Visual Studio Code, e instalar 
la extensión llamada "Live Server". La razón de esto, es que hay un problema con los CORS, 
(que lo está generando todos los navegadores por cuestiones de seguridad, al intentar cargar un 
archivo local usando un HttpRequest, que en este caso es el JSON el archivo local que estamos cargando. 
Este error se puede observar si se abre el archivo index.html dandole doble click, se abrirá 
el navegador predeterminado, después 
pulsando la tecla "F12" y yendo a la pestaña de "Console", si dentro de la página se pulsa el botón de 
"Lista de empleados", en la consola saldrá el error que menciono relacionado a los CORS, 
y no permitirá hacer absolutamente nada) y la única solución efectiva que encontré fue
ejecutar la página en un servidor local, y eso es lo que nos permite la extensión de "Live Server", 
crear un servidor local.
Para instalar dicha extensión, abren el Visual Studio Code, después 
presionan la combinación de teclas Ctrl + Shift + X, y en el buscador escribir "Live Server" e instalar.
Para ejecutar la página se deberán seguir los siguientes pasos, una vez instalada la extensión 
de "Live Server" en nuestro Visual Studio Code.
Descomprimir el archivo llamado "pruebaTecnica.zip"
Una vez haya descomprimido se debería haber creado una carpeta llamada "pruebaTecnica"
Hay que darle clic derecho a la carpeta (sin abrirla) - Abrir con Code
Si no les aparece la opción anterior, entonces pueden abrir el Visual Studio Code
En la parte superior darle clic a "Archivo" - Abrir carpeta, y seleccionan la carpeta de "pruebaTecnica"
Despues hacer clic derecho sobre el archivo "index.html" 
Después Open with Live Server si tienen el Visual Code en inglés
Si lo tienen en español entonces - Abrir con Live Server

Explicación de las carpetas y los archivos: 
Se encuentra una carpeta llamada "css", con un archivo llamado "estilo.css", 
que es en donde se realizaron los estilos utilizados para la página

Posteriormente la carpeta "img" tiene una imagen llamada "img.ico", el cual es el icono de Kis
Y que aparecerá cuando se ejecute la página, al lado izquiero del titulo

En la carpeta "js" encontramos un archivo llamado "logica.js" que es es donde se realizó la gran
mayoría de la lógica de la pagina. 

El archivo e.json es el JSON que estamos cargando, el cual 
contiene los datos como nombre, correo, supervisor y fecha de nacimiento.

El archivo e.xls fue el excel que Posteriormente se convetiría en nuestro JSON

Por último, el index.html contiene todo el maquetado de la página web, y una que otra cosa de
funcionalidad y estilo, pero son muy mínimas.

Y finalmente, este archivo README.txt, que es este archivo en donde muestro las instrucciones de
cómo se debe ejecutar la página para que funcione correctamente.

Adicionalmente, hice un vídeo mostrando gráficamente cómo se debe abrir el proyecto
Y también mostrando el funcionamiento de la página

El link al vídeo es el siguiente: 
https://youtu.be/TsuGdShnilE

