import readlinesync = require("readline-sync");

export abstract class Conta {

    //definir os atributos da classe (caracteristicas)
    private _numero: number;
    private _agencia: number;
    private _tipo: number;
    private _titular: string;
    private _saldo: number;

    //definimos o metodo construtor, responsavel por criar os objetos da classe
	constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number) {
		this._numero = numero;
		this._agencia = agencia;
		this._tipo = tipo;
		this._titular = titular;
		this._saldo = saldo;
	}

    //get pega o valor do atributo e set atualiza o valor do atributo

   //definidos os metodos get e set de cada atributo
	public get numero(): number {
		return this._numero;
	}

   
	public get agencia(): number {
		return this._agencia;
	}

    
	public get tipo(): number {
		return this._tipo;
	}

    
	public get titular(): string {
		return this._titular;
	}

    
	public get saldo(): number {
		return this._saldo;
	}

   
	public set numero(value: number) {//set não tem retorno
		this._numero = value;
	}

    
	public set agencia(value: number) {
		this._agencia = value;
	}

    
	public set tipo(value: number) {
		this._tipo = value;
	}

   
	public set titular(value: string) {
		this._titular = value;
	}

    
	public set saldo(value: number) {
        this._saldo = value;
        
    }

    //metodo sacar dinheiro
    public sacar(valor: number): boolean{

        if (this._saldo < valor) {
            console.log("O saldo é insuficiente!");
            return false;
        }

        this.saldo = this.saldo - valor;
        return true;
        
        
    }

    //metodo depositar
    public depositar(valor: number): void{
        this._saldo = this._saldo + valor;
    }

    

    public visualizar(): void{
        
        let tipo: string = "";

        switch (this._tipo) {
            case 1:
                tipo = "Conta Corrente";
                break;
            case 2:
                tipo = "Conta Poupança";
                break;
        }
    
    console.log(`\n***********************************`)
    console.log(`\nDados da Conta: `)
    console.log(`\n***********************************`)
    console.log(`\nNumero da conta: ${this._numero}`);
    console.log(`\nNumero da agência: ${this._agencia}`);
    console.log(`\nTipo da conta: ${tipo}`);
    console.log(`\nTitular da conta: ${this._titular}`);
    console.log(`\nSaldo da conta: ${this._saldo}`);

}
    //exemplo de um metodo abstrato
   // public abstract teste(): void;

	}
    
