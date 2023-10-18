import { Endereco } from "./Endereco"
import { Pessoa } from "./Pessoa";
export class Cliente extends Pessoa{
    endereco!:Endereco[];
}