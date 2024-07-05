import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";

export function main() {

    let opcao: number;

    
    //novas instancias da classe ContaCorrente(Objetos)
    //const cc1: ContaCorrente = new ContaCorrente(3, 1234, 1, 'Amanda Magro', 1000000.00, 100000);
    //const cc2: ContaCorrente = new ContaCorrente(4, 1234, 1, 'João da Silva', 1000.00, 100.00);
    
    //cc1.visualizar();
    //cc2.visualizar();

    //console.log(`\nSaque de R$25.000,00 na Conta CC1: ${cc1.sacar(25000.00)}`);
    //cc1.visualizar();
    //onsole.log(`\nSaque de R$1500,00 na Conta CC1: ${cc2.sacar(15000.00)}`);
    //cc2.depositar(3000.99)
    //cc2.visualizar();

    const cp1: ContaPoupanca = new ContaPoupanca(1, 1234,2, 'Liara Cristina', 20000.00, 22)
    cp1.depositar(3);
    cp1.sacar(30)
    cp1.visualizar();


    while (true) {

         //bg eh background e fg a fonte

        console.log(colors.bg.crimson, colors.fg.cyan,
            "*****************************************************");
        console.log("                                                     ");
        console.log("                BANCO DO BRAZIL COM Z                ");
        console.log("                                                     ");
        console.log("****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log("\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCriar Conta\n\n");

                break;
            case 2:
                console.log("\n\nListar todas as Contas\n\n");

                break;
            case 3:
                console.log("\n\nConsultar dados da Conta - por número\n\n");

                break;
            case 4:
                console.log("\n\nAtualizar dados da Conta\n\n");

                break;
            case 5:
                console.log("\n\nApagar uma Conta\n\n");

                break;
            case 6:
                console.log("\n\nSaque\n\n");

                break;
            case 7:
                console.log("\n\nDepósito\n\n");

                break;
            case 8:
                console.log("\n\nTransferência entre Contas\n\n");

                break;
            default:
                console.log("\nOpção Inválida!\n");

                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Liara Cristina");
    console.log("Generation Brasil - liara.santos@genstudents.org");
    console.log("github.com/lidskey");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}


main();