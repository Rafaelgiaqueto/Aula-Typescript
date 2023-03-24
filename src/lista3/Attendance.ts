import { CellPhone } from "./CellPhone";
import { Client } from "./Client";
import { Employee } from "./Employee";
import { Service } from "./Service";

class Attendance {
    private id: number; private date: Date;
    private client: Client // agregação
    private employee: Employee; // agregação
    private service: Service; // agregação

    constructor(id: number, date: Date, client: Client, employee: Employee, service: Service){
        this.id = id; this.date = date; this.client = client; this.employee = employee; this.service = service
    }
    // Fazendo os getters
    getService(): Service{
        return this.service
    }

    getNameClient(): Client {
        return this.client
    }

    getNameEmployee(): Employee {
        return this.employee
    }

    

    // 
    toString(): string {
        return `{id: ${this.id} Date: ${this.date} client: ${this.client.toString()} employee: ${this.employee.toString()} service: ${this.service.toString()}}`
    }
}

let obj1CellPhone = new CellPhone(40, 981267722, "Claro")
//Celular vai ser cadastrado junto com o cliente
let objClient = new Client(1, "Leandro", "1234", obj1CellPhone)

let obj2CellPhone = new CellPhone(41, 981391234, "Vivo")
// Adiciona outros celular para o cliente
objClient.addCellPhone(obj2CellPhone)

let objEmployee = new Employee(1, 100, "Vinicius")
let objService = new Service(1, "Escova", 80)


let objAttendance = new Attendance(1, new Date(), objClient, objEmployee, objService)
console.log(objAttendance.toString())

// Mostrar apenas o preço do serviço mostrado no atendimento
console.log(objAttendance.getService().getPrice())

// Mostrar apenas o nome do cliente atendido
console.log(objAttendance.getNameClient().getName())

// Mostrar apenas o nome do empregado que atender
console.log(objAttendance.getNameEmployee().getEmployee())

// 