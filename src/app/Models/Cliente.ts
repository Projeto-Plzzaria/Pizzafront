import { Endereco } from "./Endereco"
import { Pessoa } from "./Pessoa";
export class Cliente extends Pessoa{
    id!: number;
    endereco!:Endereco[];
}



