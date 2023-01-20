import {Cliente} from "./Cliente.js"
import {Gerente} from "./Funcionario/Gerente.js"
import {Diretor} from "./Funcionario/Diretor.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"
import {Funcionario} from "./Funcionario/Funcionario.js"

const diretor =  new Funcionario("Rodrigo", 10000, 12345678900);
const gerente =  new Gerente("Ricardo",  5000, 12378945601);
const cliente= new Cliente("Lais",123456789,"456");

diretor.cadastrarSenha("123456789");
gerente.cadastrarSenha("1234");
//cliente.cadastrarSenha("456");

//o SistemaAutenticacao vai ser um método estatico
// o erro é porque a classe Cliente não possui o método de autenticar
const estaLogado = SistemaAutenticacao.login(cliente, "456");


console.log(estaLogado);
