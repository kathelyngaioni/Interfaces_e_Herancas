import {Conta} from "./Conta.js"

export class contaCorrente extends Conta{
  static numeroDeContas = 0;
  constructor(cliente, agencia) {
    //Conta: saldoinicial, cliente, agencia
    super(0, cliente, agencia);
    contaCorrente.numeroDeContas += 1;
  }
  
}
