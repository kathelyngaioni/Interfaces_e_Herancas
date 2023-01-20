export class Cliente {
    get CPF(){
    return this._CPF;
  }
  
  constructor(nome,cpf, senha){
    this._nome = nome;
    this._CPF = cpf;
    this._senha = senha;
  }
}