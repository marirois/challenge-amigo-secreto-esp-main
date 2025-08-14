<div align="center">
       <img src="https://github.com/marirois/challenge-amigo-secreto-esp-main/blob/b9644564a842b0cb3c27ca7e107942339d988c24/assets/portada.png" alt="Portada del juego">
</div>

# CHALLENGE AMIGO SECRETO

:arrow_forward: :nut_and_bolt: Proyecto en construcción :nut_and_bolt:

Pequeña app web para ingresar una lista de nombres, sortear un ganador al azar y reiniciar el juego cuando quieras.

  ## DESCRIPCIÓN
**Challenge Amigo Secreto** es un proyecto web en el que el usuario ingresa nombres mediante un campo de texto. Cada nombre se muestra en una lista y se guarda en un arreglo. Se sortea un ganador al azar y finalmente se reinicia el juego.

<div align="center">
       <img src="https://github.com/marirois/challenge-amigo-secreto-esp-main/blob/b9644564a842b0cb3c27ca7e107942339d988c24/assets/pantalla-principal.png" alt="Página principal">
</div>

  ## FUNCIONALIDADES 
* Ingresar nombres a través de un imput y mostrarlos en una lista
* Validar si la caja de texto no está vacía
* Guardar los nombres en un arreglo en memoria
* Evitar duplicados en la lista
* Sortear un nombre ganador con ``Math.random();``
* Validar si no hay nombres para sortear
* Mostrar el nombre ganador y deshabilitar botones al finalizar
* Reiniciar el juego habilitando nuevamente los botones y limpiando datos

    ### Funcionalidades principales
* agregarAmigo() - Valida que el input no esté vacío y añade el nombre ingresado al arreglo y actualiza la lista en pantalla
* recorrerArreglo() - Limpia la lista previa y crea elementos ``<li>`` por cada nombre creando una nueva lista
* sortearAmigo() - Realiza validación, sortea un nombre con ``Math.floor(Math.random())``, limpia datos y ajusta botones
* reiniciarJuego() - Restaura el estado inicial de la aplicación y botones.

  ## CÓMO USARLO
1. Clona el repositorio 
    ``git clone https://github.com/marirois/challenge-amigo-secreto-esp-main``
2. Abre el ``index.html`` en tu navegador
3. Agrega nombres en la caja de texto uno por uno y presiona *Agregar*
4. Ya que hayas agregado todos los nombres da click en el botón *Sortear amigo* para elegir el ganador
5. Da click en el botón *Jugar de nuevo* para reiniciar el juego

<div align="center">
       <img src="https://github.com/marirois/challenge-amigo-secreto-esp-main/blob/8bc5e7794cfd64d7fbd43bcbba65b84d5140b25f/assets/grabacion-amigo-secreto.gif" alt="Animación de uso del juego">
</div>

  ## TECNOLOGÍAS UTILIZADAS
* HTML5 - Estructura
* CSS3 - Estilos
* JavaScript - Lógica y manipulación del DOM

  ## DESARROLLADORES
* Mariana Rodríguez
  * [Linkedin](https://www.linkedin.com/in/mariana-rodr%C3%ADguez-b19b0048/)
  * [GitHub](https://github.com/marirois)

  ## NOTAS TECNICAS
* El sorteo se basa en Math.floor(Math.random() * amigos.length);
* Se controla el estado de los botones según la etapa del juego.
* Se validan entradas.

Versión 1.0

  ## :warning: AVISO DICIONAL
Se creó también un archivo app2.js como versión alternativa de la lógica. En esta variante **no se utiliza un ciclo** ``for`` para recorrer el arreglo, sino que se implementa la función ``actualizarLista()``, la cual crea elementos ``<li>`` cada vez que se ejecuta la función ``agregarAmigo()`` sin eliminar la lista existente. De esta forma, simplemente se agregan los nombres en la misma lista en pantalla.
**IMPORTANTE**: Esta variante ofrece otra manera de gestionar la lista de nombres y no afecta el correcto funcionamiento del juego. 
