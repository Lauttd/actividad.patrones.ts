interface Equipo {
    nombre: string,
    tipo: string,
    estado: string,
}

//creamos la clase inventario 
//obtenemos la instancia y si no hay creamos el inventario
class Inventario {
    private static instancia: Inventario;
    private equipos: Equipo[] = [];

    private constructor() {};

    public static obtenerInstancia(): Inventario {
        if (!Inventario.instancia) {
            Inventario.instancia = new Inventario();
        } return Inventario.instancia;
    }
//agregamos el equipo y pusheamos lo que mandamos
    public agregarEquipo ( nombre: string, tipo: string, estado: string ): void {
        this.equipos.push({ nombre, tipo, estado});
    } 
//aca listamos el equipo, retornamos y copiamos las propiedades de equipo
    public listarEquipo(): Equipo[] {
        return this.equipos;
    }
}

    const inventario = Inventario.obtenerInstancia();
    
    inventario.agregarEquipo("Notebook HP", "Portátil", "disponible");

    console.log(inventario.listarEquipo());

