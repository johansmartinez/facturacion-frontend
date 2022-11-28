import { ProductoFac } from "./producto";

export interface Factura {
    facturaId:string,
    facturacion:string,
    clienteDni:string,
    clienteNombre:string,
    clienteApellido:string,
    total:number
}

export interface FacturaDTO{
    facturacion: string,
    facturaId:string,
    clienteDni: string,
    clienteNombre: string,
    clienteApellido: string,
    total:number,
    productos: ProductoFac[]
}