import {Cliente} from "./Cliente.js"
import {Gerente} from "./Funcionario/Gerente.js"
import {Diretor} from "./Funcionario/Diretor.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"

const diretor =  new Diretor("Rodrigo", 10000, 12345678900);
const gerente =  new Gerente("Ricardo",  5000, 12378945601);

diretor.cadastrarSenha("123456789");
gerente.cadastrarSenha("1234");

//o SistemaAutenticacao vai ser um método estatico
const estaLogado = SistemaAutenticacao.login(diretor, "123456789");


console.log(estaLogado);
