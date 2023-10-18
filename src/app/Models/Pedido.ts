import { Bebida } from "./Bebida"
import { Comida } from "./Comida"
import { Funcionario } from "./Funcionario"
import { Cliente } from "./Cliente"

export class Pedido{
    bebida!:Bebida;
    comida!:Comida;
    funcionario!:Funcionario;
    cliente!:Cliente;
    valor!:Number;
}