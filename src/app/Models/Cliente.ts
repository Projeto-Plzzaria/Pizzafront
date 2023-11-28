import { Pessoa } from "./Pessoa";
export class Cliente extends Pessoa{
    id!: number;
    rua!: string;
    num!: number;
    bairro!: string;

}