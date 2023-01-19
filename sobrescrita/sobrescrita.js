import {Cliente} from "./Cliente.js"
import {Conta} from "./Conta.js"
import {contaCorrente} from "./ContaCorrente.js"
import {contaPoupanca} from "./ContaPoupanca.js"


const cliente1 = new Cliente("Alice", 88822233309);
const cliente2 = new Cliente("Kathelyn",123456789);
//console.log(cliente1);
//console.log(cliente1.CPF);

//o saldo inicial na Conta Corrente é sempre zero.
const ContaCorrente1 = new contaCorrente(cliente1, 101);
const ContaPoupanca = new contaPoupanca(50 , cliente1 , 101);
const ContaCorrente2 = new contaCorrente(cliente2, 202);

ContaCorrente2.depositar(500);
//o método sacar na conta corrente possui uma taxa diferente do método sacar da classe Conta.
ContaCorrente2.sacar(100);
ContaPoupanca.sacar(10);

console.log(ContaCorrente2);
console.log(ContaCorrente1);
console.log(ContaPoupanca);
console.log(contaCorrente.numeroDeContas);