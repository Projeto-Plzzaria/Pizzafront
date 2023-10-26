import { Bebida } from "./Bebida"
import { Comida } from "./Comida"
import { Funcionario } from "./Funcionario"
import { Cliente } from "./Cliente"
import { Bast } from "./Bast";

export class Pedido {
    id!:number;
    obs!:string;
    bebida!:Bebida[];
    comida!:Comida[];
    funcionario!:Funcionario;
    cliente!:Cliente;
    total!:Number;
}