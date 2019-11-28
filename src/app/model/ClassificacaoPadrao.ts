import { Empresa } from './Empresa';
import { LoginService } from '../services/login.service';

export class ClassificacaoPadrao {
    public id:number;
    public empresa:Empresa;
    public classificacao:string;

    constructor (empresa:Empresa) {
        this.empresa = empresa;
    }
}