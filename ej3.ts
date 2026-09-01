// Ejercicio 3: Implementar Patrón Observer para Seguimiento del Estado
// Objetivo: Utilizar el patrón Observer para notificar a un departamento de soporte cuando un equipo cambia de estado.

// Crear una clase Soporte que actúe como observador y reciba notificaciones cuando el estado de un equipo cambie.
// Implementar la clase Equipo que permita agregar observadores y notifique a los observadores cuando su estado cambie.
// Definir una interfaz Observador (con el método de notificación) para que Equipo dependa de esa interfaz y no de la clase Soporte concreta — así se pueden agregar otros observadores (mail, log, etc.) sin modificar Equipo.
// Ejemplo de salida esperada:

// const soporte = new Soporte();
// const equipo = new Equipo("Notebook HP", "Portátil", "disponible");
// equipo.agregarObservador(soporte);
// equipo.cambiarEstado("en reparación");
// // Soporte notificado: Notebook HP ha cambiado su estado a en reparación.

