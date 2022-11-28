import { ProductoFac, ProductoFactura } from "./producto";

export interface Factura {
    facturaId:string,
    facturacion:string,
    clienteDni:string,
    clienteNombre:string,
    clienteApellido:string,
    total:number
}

export interface CreateFactura{
    clienteDni: string
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

export interface FacturaDSO{
    clienteDni: string,
    productos: ProductoFactura[]
}