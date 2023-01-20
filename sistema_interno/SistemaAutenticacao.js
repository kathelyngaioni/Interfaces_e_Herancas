//♥ A herança não é a única forma da gente compartilhar código.
export class SistemaAutenticacao {
  static login(autenticavel, senha){
    return autenticavel.autenticar(senha);
  }
}