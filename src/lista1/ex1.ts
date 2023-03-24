class Aluno {
  numAluno: number;
  nome: string;
  idade: number;
  p1: number;
  p2: number;


  // metodo construtor

  constructor(numAluno: number, nome: string, idade: number, p1: number, p2: number){
    this.numAluno = numAluno;
    this.nome = nome;
    this.idade  = idade;
    this.p1 = p1
    this.p2 = p2
  }
  // calcula e retorna a nota final
  calculaMedia(): number {
    return(this.p1 + this.p2) / 2
  }

  // verifica se o aluno passou
  passou(): void {
    if(this.calculaMedia() >= 6) {

      console.log("Aluno passou")
    }
    else {
      console.log("Aluno reprovado")
    }
  }
  dadosAluno(): string {
    return`numero do aluno: ${this.numAluno} Nome: ${this.nome}
    idade ${this.idade} nota final ${this.calculaMedia()}`
  }
}
  // construir objeto

  let objAluno = new Aluno(123, "João", 20, 6.5, 7.0)

  console.log(objAluno)
  objAluno.passou()
  console.log(objAluno.dadosAluno())

