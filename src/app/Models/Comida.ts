import { Tamanho } from "./Tamanho";

import { Sabordois } from "./Sabordois";
import { Sabortres } from "./Sabortres";
import { Saborum } from "./Saborum";

export class Comida {
    id!: number;
    saborum!: Saborum;
    sabordois!:Sabordois;
    sabortres!:Sabortres;
    tamanho!: Tamanho;
    valor!: number;
}
