type EquipoData = {
  nombre: string;
  tipo: string;
  estado: string;
};

interface Inventario {
  agregarEquipo(nombre: string, tipo: string, estado: string): void;
  listarEquipos(): EquipoData[];
}


class InventarioViejo {
  private items: { item: string; categoria: string; estadoActual: string }[] = [];
  public agregarItem(item: string, categoria: string, estadoActual: string): void {
    this.items.push({ item, categoria, estadoActual });
  }

  public obtenerItems(): { item: string; categoria: string; estadoActual: string }[] {
    return this.items;
  }
}

class AdaptadorInventario implements Inventario {
  private inventarioViejo: InventarioViejo;
  
  constructor(inventarioViejo: InventarioViejo) {
    this.inventarioViejo = inventarioViejo;
  }


  public agregarEquipo(nombre: string, tipo: string, estado: string): void {
    this.inventarioViejo.agregarItem(nombre, tipo, estado);
  }

  public listarEquipos(): EquipoData[] {
    const itemsViejos = this.inventarioViejo.obtenerItems();

    return itemsViejos.map((i) => ({
      nombre: i.item,
      tipo: i.categoria,
      estado: i.estadoActual,
    }));
  }
}

const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);
adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible");
console.log(adaptador.listarEquipos());
// [{ nombre: "Servidor Dell", tipo: "Servidor", estado: "disponible" }]