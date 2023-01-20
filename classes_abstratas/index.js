import {Cliente} from "./Cliente.js"
import {contaCorrente} from "./ContaCorrente.js"
import {contaPoupanca} from "./ContaPoupanca.js"
import {Conta} from "./Conta.js"

const cliente1 = new Cliente("Alice", 88822233309);

// eu quero impedir que a pessoa crie uma conta do tipo Conta
const conta = new Conta(0 , cliente1, 101);
const ContaPoupanca = new contaPoupanca(cliente1, 202);
const ContaCorrente = new contaCorrente(0, cliente1, 303);

