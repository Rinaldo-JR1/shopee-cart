import { createItem } from "./services/item.js"
import * as cartService from './services/cart.js'
const cart = []
const myWishList = []
console.log("Welcome to your shopee cart")

const item1 = await createItem("Mousepad", 34.99, 3)
const item2 = await createItem("Mouse", 29, 2)
const item3 = await createItem("SSD", 40, 4)

const item4 = await createItem("Keyboard", 200, 2)
const item5 = await createItem("Monitor", 400, 8)


await cartService.addItem(cart, item1)
await cartService.addItem(cart, item2)
await cartService.addItem(cart, item3)

cartService.removeItem(cart, item2)

await cartService.addItem(myWishList, item4)
await cartService.addItem(myWishList, item5)



cartService.displayCart(cart)
cartService.displayCart(myWishList)

console.log(`Your cart value is: $${await cartService.getCartValue(cart)}`)
console.log(`Your wishlist value is: $${await cartService.getCartValue(myWishList)}`)