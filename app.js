/****************************************************
* Objetivo: Calcular a média de um aluno
* Data: 09/08/23
* Autor: Gustavo Campos
* Versão: 1.1
*****************************************************/
const { stat } = require("fs")
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
                let n1=nota1.replace(',','.')
                entradaDados.question('Digite a segunda nota: ',function(nota2){
                    let n2=nota2.replace(',','.')
                    entradaDados.question('Digite a terceira nota: ',function(nota3){
                        let n3=nota3.replace(',','.')
                        entradaDados.question('Digite a quarta nota: ',function(nota4){
                            let n4=nota4.replace(',','.')
                            if(n1==''||n2==''||n3==''||n4==''){
                                console.log('---------------------------')
                                console.log('ERRO: É obrigatório o preenchimento de todas as notas!')
                                entradaDados.close()
                            }else if(isNaN(n1)||isNaN(n2)||isNaN(n3)||isNaN(n4)){
                                console.log('---------------------------')
                                console.log('ERRO: É obrigatório a entrada apenas de valores numéricos!')
                                entradaDados.close()
                            }else if(n1>10||n1<0||n2>10||n2<0||n3>10||n3<0||n4>10||n4<0){
                                console.log('---------------------------')
                                console.log('ERRO: É obrigatório apenas a entrada de valores apenas entre 0 e 10!')
                                entradaDados.close()
                            }
                            else{
                                let media=(Number(n1)+Number(n2)+Number(n3)+Number(n4))/4
                                let status
                                if(media<=4.9){
                                    status='Aluno Reprovado'
                                }else if(media>=5&&media<=6.9){
                                    status='Aluno de Exame'
                                }else if(media>=7&&media<=10){
                                    status='Aluno aprovado'
                                }
                                console.log('---------------------------')
                                console.log('BOLETIM DO ALUNO: ')
                                console.log('Nome do aluno: '+nome)
                                console.log('Curso: '+curso)
                                console.log('Disciplina: '+disciplina)
                                console.log('Nota 1: '+String(n1).replace('.',','))
                                console.log('Nota 2: '+String(n2).replace('.',','))
                                console.log('Nota 3: '+String(n3).replace('.',','))
                                console.log('Nota 4: '+String(n4).replace('.',','))
                                console.log('Média final: '+String(media.toFixed(1)).replace('.',',')+' - '+status)
                                entradaDados.close()
                            }
                        })
                    })
                })
            })
        })
    })
})