export interface Cliente {
    dni:string;
    nombres:string;
    apellidos:string
    direccion:string;
    fechaNacimiento:string;
}

export interface ClientDTO extends Omit<Cliente, "dni">{
}