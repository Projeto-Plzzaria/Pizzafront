import { Bebida } from "./Bebida"
import { Comida } from "./Comida"
import { Funcionario } from "./Funcionario"
import { Cliente } from "./Cliente"

export class Pedido {
    id!:number;
    obs!:string;
    bebida!:Bebida[];
    comida!:Comida[];
    funcionario!:Funcionario;
    cliente!:Cliente;
    total!:Number;
}