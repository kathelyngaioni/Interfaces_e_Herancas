export class Conta {
  
  constructor(saldoInicial, cliente, agencia) {
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

  sacar(valor) {
    let taxa = 1;
    return this._sacar(valor, taxa);
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

  teste(){
    console.log("teste na Conta");
  }
}