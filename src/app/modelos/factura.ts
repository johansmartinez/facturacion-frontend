import { Compra } from "./compra";
export interface Factura {
    id:number;
    fecha_facturacion:string;
    nombre:string;
    total:string;
}

export interface FacturaDTO {
    cliente:string;
    fecha_facturacion:string;
    compras:Compra[]
}

export interface FacturaDetalle{
    id:number;
    fecha_facturacion:string;
    nombre:string;
    total:number
    unidades:number
    producto:string;
}