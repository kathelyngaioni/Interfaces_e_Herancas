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
    // a classe contaCorrente está acessando diretamente um método privado (_sacar(valor,taxa)) da classe pai Conta
    return this._sacar(valor, taxa);
  }
}