export class Cliente {
  get CPF(){
    return this._CPF;
  }
  
  constructor(nome,cpf){
    this.nome = nome;
    this._CPF = cpf;
  }
}