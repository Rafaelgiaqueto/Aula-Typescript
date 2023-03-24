import { CellPhone } from "./CellPhone"


export class Client{
  private id: number
  private name: string
  private cpf: string
  private cellPhones: CellPhone[] 

  constructor(id: number, name: string, cpf: string, cellPhone: CellPhone){
    this.id = id
    this.name = name
    this.cpf = cpf
    this.cellPhones = [] // Aloca espaço para o vetor
    this.addCellPhone(cellPhone) // Adiciona o primeiro celular
  }

  addCellPhone(cellphone: CellPhone): void {
    this.cellPhones.push(cellphone)
  }

  getName(): string {
    return this.name
  }

  toString(): string {
    return `(id: ${this.id} Name: ${this.name} Cpf: ${this.cpf} CellPhones: ${this.cellPhones})`
  }
}