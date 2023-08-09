/****************************************************
* Objetivo: Calcular a média de um aluno
* Data: 09/08/23
* Autor: Gustavo Campos
* Versão: 1.1
*****************************************************/
var readline=require("readline")
var entradaDados=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
entradaDados.question('Digite o nome do aluno: ',function(nomeAluno){
    let nome=nomeAluno
    entradaDados.question('Digite o curso do aluno: ',function(cursoAluno){
        let curso=cursoAluno
        entradaDados.question('Digite a disciplina: ',function(disciplinaAluno){
            let disciplina=disciplinaAluno
            entradaDados.question('Digite a primeira nota do aluno: ',function(nota1){
                let n1=nota1
                entradaDados.question('Digite a segunda nota: ',function(nota2){
                    let n2=nota2
                    entradaDados.question('Digite a terceira nota: ',function(nota3){
                        let n3=nota3
                        entradaDados.question('Digite a quarta nota: ',function(nota4){
                            let n4=nota4
                            let notasSomadas=Number(n1)+Number(n2)+Number(n3)+Number(n4)
                            let media=notasSomadas/4
                            console.log('---------------------------')
                            console.log('BOLETIM DO ALUNO: ')
                            console.log('Nome do aluno: '+nome)
                            console.log('Curso: '+curso)
                            console.log('Disciplina: '+disciplina)
                            console.log('Nota 1: '+n1)
                            console.log('Nota 2: '+n2)
                            console.log('Nota 3: '+n3)
                            console.log('Nota 4: '+n4)
                            console.log('Média final: '+media)
                            entradaDados.close()
                        })
                    })
                })
            })
        })
    })
})