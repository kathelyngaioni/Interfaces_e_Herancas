import {Conta} from "./Conta.js"

export class contaCorrente extends Conta{
  static numeroDeContas = 0;
  constructor(cliente, agencia) {
    //Conta: saldoinicial, cliente, agencia
  super(0, cliente, agencia);
  contaCorrente.numeroDeContas += 1;
  }

  //sobrescrevendo o comportamento de sacar
  sacar(valor) {
    let taxa = 1.1;
    return this._sacar(valor, taxa);
  }
}