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
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
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