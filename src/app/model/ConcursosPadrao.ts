import { Empresa } from './Empresa';

export class ConcursosPadrao {
    public id:number;
    public empresa:Empresa;
    public concursos: string[];

    constructor(empresa:Empresa) {
        this.empresa = empresa;
    }
}