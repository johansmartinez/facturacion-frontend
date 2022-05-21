export interface Producto {
    producto:string;
    precio: number;
    cod: number;
    proveedor:string;
    proveedor_id:string;
}

export interface ProductoDTO {
    nombre: string;
    precio_unitario: number;
    proveedor:string;
}

export interface CreateProducto extends ProductoDTO{
    codigo:number;
}

