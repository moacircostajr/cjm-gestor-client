import { Empresa } from './Empresa';

export class BancasPadrao {
    public id:number;
    public empresa:Empresa;
    public bancas:string[];

    constructor(empresa:Empresa) {
        this.empresa = empresa;
    }
}