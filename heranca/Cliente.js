export class Cliente {
  //as propriedades da classe Cliente já estão sendo declaradas no contrutor.
  //nome;
  //_CPF;

  get CPF(){
    return this._CPF;
  }
  
  constructor(nome,cpf){
    this.nome = nome;
    this._CPF = cpf;
  }
}