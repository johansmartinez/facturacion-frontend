export interface Proveedor {
    proveedorId:string,
    nombre:string
}

export interface ProveedorDTO extends Omit<Proveedor, "proveedorId">{}