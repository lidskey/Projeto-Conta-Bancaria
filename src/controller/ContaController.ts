import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository {
  //implementando a interface

  //coleção array que vai amarzenar os objetos Conta
  private listaContas: Array<Conta> = new Array<Conta>();

  //controlar os números das contas/contador
  public numero: number = 0;

  procurarPorNumero(numero: number): void {
    let buscaConta = this.buscarNoArray(numero);

    if (buscaConta !== null) buscaConta.visualizar();
    else console.log("\nA Conta não encontrada!");
  }

  listarTodas(): void {
    for (let conta of this.listaContas) {
      conta.visualizar();
    }
  }

  cadastrar(conta: Conta): void {
      this.listaContas.push(conta);
      console.log("A Conta foi cadastrada com sucesso!");
  
  }

  atualizar(conta: Conta): void {
    let buscaConta = this.buscarNoArray(conta.numero);

    if (buscaConta !== null) {
      //this.listaConta[1]=conta; o index of substitui essa função
      this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
      console.log("\nA conta foi atualizada!");
    } else console.log("\nA Conta não foi encontrada!");
  }

  deletar(numero: number): void {
    let buscaConta = this.buscarNoArray(numero);

    if (buscaConta !== null) {
      this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
      console.log("\nA conta foi excluída!");
    } else console.log("\nA Conta não foi encontrada!");
  }

  sacar(numero: number, valor: number): void {
    let buscaConta = this.buscarNoArray(numero);

    if (buscaConta !== null) {
      if (buscaConta.sacar(valor) === true)
        console.log("\nO Saque foi efetuado com sucesso!");
    } else console.log("\nA Conta não foi encontrada!");
  }

  depositar(numero: number, valor: number): void {
    let buscaConta = this.buscarNoArray(numero);

    if (buscaConta !== null) {
      buscaConta.depositar(valor);
      console.log("\nO Depósito foi efetuado com sucesso!");
    } else console.log("\nA Conta não foi encontrada!");
  }

  transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
    let buscaContaOrigem = this.buscarNoArray(numeroOrigem);
    let buscaContaDestino = this.buscarNoArray(numeroDestino);

    if (buscaContaOrigem !== null && buscaContaDestino !== null) {
      if (buscaContaOrigem.sacar(valor) === true) {
        buscaContaDestino.depositar(valor);
        console.log("\nA Transfrência foi efetuada com sucesso!");
      }
    } else
      console.log("\nA Conta de Origem e/ou Destino não foram encontradas!");
  }

  //Metodos Auxiliares
  public gerarNumero(): number {
    return ++this.numero;
  }
  public buscarNoArray(numero: number): Conta | null {
    for (let conta of this.listaContas) {
      if (conta.numero == numero) return conta;
    }
    return null;
  }
}
