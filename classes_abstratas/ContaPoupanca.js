import {Conta} from "./Conta.js"

export class contaPoupanca extends Conta {
  constructor(saldoinicial , cliente , agencia) {  
    super(saldoinicial, cliente, agencia);
  }

  sacar(valor) {
    let taxa = 1.02;
    return this._sacar(valor, taxa);
  }
}