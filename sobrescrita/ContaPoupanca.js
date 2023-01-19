import {Conta} from "./Conta.js"

export class contaPoupanca extends Conta {
  constructor(saldoinicial , cliente , agencia) {  
    super(saldoinicial, cliente, agencia);
  }
}