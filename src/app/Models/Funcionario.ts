import { Cargo } from "./Cargo"
import { Pessoa } from "./Pessoa";
export class Funcionario extends Pessoa{
    id!: number;
    cargo!:Cargo;
    email!:string;
}