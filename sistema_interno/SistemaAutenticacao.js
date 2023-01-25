/*♥ A herança não é a única forma da gente compartilhar código.
Duck type são comuns em linguagens que não são fortemente tipadas
*/

export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }

static ehAutenticavel(autenticavel){
  return "autenticar" in autenticavel &&
  autenticavel.autenticar instanceof Function
    }
}
