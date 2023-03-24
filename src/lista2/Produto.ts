class ProdutoEncap {
    public id: number
    public descricao: string
    private qtde: number
    private preco: number

    constructor(id:number, descricao: string, qtde: number, preco: number){
        this.id = id; this.descricao = descricao; this.qtde = qtde; this.preco = preco
    }

    setQtde(qtde: number): void {
        if(qtde >= 0){
            this.qtde = qtde
        }

        else {
            console.log('Qtde negativa não pode')
        }
    }

    setPreco(preco: number): void {
        if(preco >= 0){
            this.preco = preco
        }
        else {
            console.log('Preço negativo não pode')
        }
    }

    comprar(x: number): void {
        this.qtde += x
    }
    vender(x: number): void {
        this.qtde -= x
    }
    subir(x: number): void {
        this.preco += x
    }
    descer(x: number): void {
        this.preco -= x
    }
    mostra(): string {
        return `id: ${this.id} Descrição: ${this.descricao} Qtde: ${this.qtde} Preço: ${this.preco}`
    }
}

let obj1ProdEncap = new ProdutoEncap(1, 'X Bacon Salada', 5, 28)
let obj2ProdEncap = new ProdutoEncap(2, 'Lasanha a Bolonhesa', 10, 20)
obj1ProdEncap.comprar(3)
obj2ProdEncap.vender(4)
obj1ProdEncap.subir(3)
obj2ProdEncap.descer(3)

console.log(obj1ProdEncap.mostra())
console.log(obj2ProdEncap.mostra())

obj1ProdEncap.setQtde(-40)
obj2ProdEncap.setPreco(-90)
obj1ProdEncap.setQtde(30)
obj2ProdEncap.setPreco(90)