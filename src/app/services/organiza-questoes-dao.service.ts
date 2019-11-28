import { Injectable } from '@angular/core';
import {from as observableFrom} from 'rxjs';
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: 'root'
})
export class OrganizaQuestoesDaoService {

  CHAVE_ORG='taxonomia';

  constructor(private storage: Storage) { }

  obter() {
    let promise = this.storage.get(this.CHAVE_ORG);
    return observableFrom(promise);
  }

  salvar(taxonomia) {
    this.storage.set(this.CHAVE_ORG, taxonomia);
  }
}
