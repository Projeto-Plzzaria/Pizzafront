import { Cargo } from "./Cargo"
import { Pessoa } from "./Pessoa";
export class Funcionario extends Pessoa{
    cargo!:Cargo;
    email!:string;
}