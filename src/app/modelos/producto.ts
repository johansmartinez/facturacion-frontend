export interface Producto {
    id:string,
    nombre: string,
    precioUnitario: number,
    proveedorId: string,
    proveedorNombre: string
}

export interface ProductoDTO extends Omit<Producto, "id" | "proveedorNombre">{
}

export interface ProductoFactura extends Omit<Producto, "proveedorNombre" | "proveedorId" | "precioUnitario">{
    unidades:number
}
