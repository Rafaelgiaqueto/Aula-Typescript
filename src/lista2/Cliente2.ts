class ClienteEncap {
  private noConta: string;
  private noAgencia: string;
  private nome: string;
  private saldo: number

  constructor(noConta: string, noAgencia: string, nome: string, saldo: number){
    this.setNoConta(noConta)
    this.setNoAgencia(noAgencia)
    this.setNome(nome)
    this.setSaldo(saldo)
  }

  sacar(x:number){
    this.setSaldo(this.saldo - x)
  }

  depositar(x: number){
    this.setSaldo(this.saldo + x)
  }

  setNoConta(noConta: string){
    if((noConta.length == 8) && (noConta.charAt(6) == '-')){
      this.noConta = noConta
    }else {
      console.log('Numero da conta invalido')
    }
  }
  setNoAgencia(noAgencia: string){
    if((noAgencia.length == 6) && (noAgencia.charAt(4) == '-')){
      this.noAgencia = noAgencia
    }else {
        console.log('Numero da agencia invalido')
    }
  }

  setNome(nome: string) {
    if(nome.length <= 30) {
      this.nome = nome
    }else {
      console.log('Nome invalido')
    }
  }

  setSaldo(saldo: number) {
    if(saldo >= 0) {
      this.saldo = saldo
    }else {
      console.log('O saldo não pode ser negativo')
    }
  }

  getNoConta(): string {
    return this.noConta
  }

  getNoAgencia(): string {
    return this.noAgencia
  }

  getNome(): string{
    return this.nome
  }

  getSaldo(): number{
    return this.saldo
  }

}

let fulano = new ClienteEncap('123456-7', '1234-5', 'Fulano', 200)

console.log(fulano.depositar(300))
console.log(fulano.sacar(1))
console.log(`Saldo da conta ${fulano.getSaldo()}`)
