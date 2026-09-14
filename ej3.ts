interface Observador {
  notificar(equipo: Equipo): void;
}

class Soporte implements Observador {
  public notificar(equipo: Equipo): void {
    console.log(`Soporte notificado: ${equipo.nombre} ha cambiado su estado a ${equipo.estado}.`);
  }
}


class Equipo {
  public nombre: string;
  public tipo: string;
  public estado: string;
  
  private observadores: Observador[] = [];

  constructor(nombre: string, tipo: string, estado: string) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.estado = estado;
  }

  // Agrega un observador al arreglo
  public agregarObservador(observador: Observador): void {
    this.observadores.push(observador);
  }

  public eliminarObservador(observador: Observador): void {
    this.observadores = this.observadores.filter((obs) => obs !== observador);
  }

  // Notifica a todos los observadores registrados
  private notificarObservadores(): void {
    for (const observador of this.observadores) {
      observador.notificar(this);
    }
  }

  // Modifica el estado y dispara la notificación automáticamente
  public cambiarEstado(nuevoEstado: string): void {
    this.estado = nuevoEstado;
    this.notificarObservadores();
  }
}

const soporte = new Soporte();
const equipo = new Equipo("Notebook HP", "Portátil", "disponible");
equipo.agregarObservador(soporte);
equipo.cambiarEstado("en reparación");
// Soporte notificado: Notebook HP ha cambiado su estado a en reparación.