import { Tamanho } from "./Tamanho";
import { Sabores } from "./Sabores";

export class Comida {
    id!: number;
    sabores!: Sabores;
    tamanho!: Tamanho;
    valor!: number;
}
