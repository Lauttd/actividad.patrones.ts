// Ejercicio 2: Implementar Patrón Factory Method para Crear Equipos
// Objetivo: Utilizar el patrón Factory Method para crear diferentes tipos de equipos.

// Crear una clase EquipoFactory con un método crearEquipo que, basado en el tipo de equipo ("Notebook", "Desktop", "Servidor"), devuelva una instancia de la clase adecuada.
// Crear clases específicas para cada tipo de equipo (Notebook, Desktop, Servidor), cada una con sus propias propiedades (Ej.: ram, procesador).
// Estas clases deben extenderse de una clase abstracta común que declare el método detalles(), para que crearEquipo devuelva siempre un tipo uniforme sin importar el equipo concreto que construya.
// Ejemplo de salida esperada:

// const factory = new EquipoFactory();
// const Notebook = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7");
// console.log(Notebook.detalles());
// // Tipo: Notebook, Nombre: Dell XPS, RAM: 16GB, Procesador: i7

abstract class AbstractEquipo {
  constructor(
    private Tipo: string,
    private Nombre: string,
    private Ram: string,
    private Procesador: string,
  ) {}

  detalles(): string {
    return `Nombre: ${this.Nombre}, Tipo: ${this.Tipo}, Ram: ${this.Ram}, Procesador: ${this.Procesador}`;
  }
}

class Notebook extends AbstractEquipo {}

class Desktop extends AbstractEquipo {}

class Servidor extends AbstractEquipo {}

class EquipoFactory {
  crearEquipo(
    tipo: string,
    nombre: string,
    ram: string,
    procesador: string,
  ): AbstractEquipo {
    if (tipo.toLowerCase() == "notebook") {
      return new Notebook(tipo, nombre, ram, procesador);
    } else if (tipo.toLowerCase() == "desktop") {
      return new Desktop(tipo, nombre, ram, procesador);
    }
    return new Servidor(tipo, nombre, ram, procesador);
  }
}

const factory = new EquipoFactory();
const notebook = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7");
console.log(notebook.detalles());


// Tipo: Notebook, Nombre: Dell XPS, RAM: 16GB, Procesador: i7
