export class Conta {
  
  constructor(saldoInicial, cliente, agencia) {
    if(this.constructor == Conta) { 
      throw new Error("Você não deveria estar instanciando um objeto do tipo Conta");
     }
    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
  }
  set cliente (cliente){
    if(cliente instanceof Cliente){
      this._cliente = cliente;
    }
  }
  
  get cliente(){
    return this._cliente;
  }
  
  get saldo(){
    return this._saldo;
  }

  //método abstrato
  //lançar um erro quando chamar um método abstrato
  sacar(valor) {
    // let taxa = 1;
    // return this._sacar(valor, taxa);
    throw new Error("O método sacar da Conta é abstrato");
  }

   _sacar(valor, taxa) {
     const valorSacado = taxa * valor;
     if (this._saldo >= valor) {
       this._saldo -= valorSacado;
       return valorSacado;
     }
    // para casos de saldo insuficiente
    return 0;
   }

  depositar(valor) {
    if (valor <= 100) {
      return;
    }
    this._saldo += valor;
  }

  tranferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}