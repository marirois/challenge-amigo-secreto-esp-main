# Challenge Amigo Secreto

Pequeña app web para ingresar una lista de nombres, sortear un ganador al azar y reiniciar el juego cuando quieras


## Descripción
**Challenge Amigo Secreto** es un proyecto web en el que el usuario ingresa nombres mediante un campo de texto. Cada nombre se muestra en una lista y se guarda en un arreglo. Se sortea un ganador al azar y finalmente se reinicia el juego.

## Funcionalidades 
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