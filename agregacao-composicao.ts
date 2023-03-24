class Product {
    private name: string
    private price: number

    constructor(name: string, price: number){
        this.name = name; this.price = price
    }

    // Fazer os métodos getters e setters 
    getPrice(): number{
        return this.price
    }
    // Metodo que converte objeto em string
    toString(): string {
        return `Name: ${this.name} Price: ${this.price}`
    }
}

const obj1Product = new Product('Alexa', 400)
const obj2Product = new Product('Bola de basquete', 200)

// class Todo para a associação com Product
class CarItem {
    private product: Product // agregação
    private quantity: number

    constructor(product: Product, quantity: number){
        this.product = product; this.quantity = quantity
    }

    // Fazer os metodos getters e setters 

    // Metodo para calcular o valor total do item do carrinho
    calculateTotalPrice(): number {
        return this.quantity * this.product.getPrice()
    }

    // Metodo que converte objeto em string
    toString(): string {
        return `Car Item {Product: ${this.product.toString()} Quantity: ${this.quantity} Total price: ${this.calculateTotalPrice()}}`
    }
}

const obj1CarItem = new CarItem(obj1Product, 2)
console.log(obj1CarItem.toString())

const obj2CarItem = new CarItem(obj2Product, 5)
console.log(obj2CarItem.toString())

class ShoppingCart {
    private id: number
    private carItens: CarItem[]

    constructor(id: number){
        this.id = id
        this.carItens = []
    }      
    addCarItem(CarItem: CarItem): void {
        //insere um item de carrinho no carrinho de compras
        this.carItens.push(CarItem)
    }
    // Metodo que converte objeto em string 
    toString(): string{
        return `{Id: ${this.id} Itens do carrinho: ${this.carItens}}`
    }
    calculateTotalShoppingCart(): number {
        let total = 0
        this.carItens.forEach(CarItem => {
            total += CarItem.calculateTotalPrice()
        })
        return total
    }
}
let obj1ShoppingCart = new ShoppingCart(1)
obj1ShoppingCart.addCarItem(obj1CarItem)
obj1ShoppingCart.addCarItem(obj2CarItem)
console.log(obj1ShoppingCart.toString())
console.log('Total do carrinho: ', obj1ShoppingCart.calculateTotalShoppingCart())