
async function addItem(cart, item) {
  cart.push(item)
}

async function getCartValue(cart = []) {
  return cart.reduce((total, item) => total + item.subtotal(), 0)
}

async function deleteItem(cart = [], name) {
  const index = cart.findIndex((item) => item.name === name)
  if (index !== -1) {
    cart.splice(index, 1)
    return
  }
  console.log("No items to be deleted")
}

async function removeItem(cart = [], item) {
  const indexFound = cart.findIndex((p) => p.name === item.name)
  if (indexFound === -1) {
    console.log("Item not found")
    return
  }
  if (cart[indexFound].quantity > 1) {
    cart[indexFound].quantity -= 1
    return
  }
  cart.splice(indexFound, 1)
}

async function displayCart(cart = []) {
  console.log("Cart list:")
  cart.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} - $${item.price} | ${item.quantity} | Subtotal $${item.subtotal()}`)
  })
}
export { addItem, getCartValue, deleteItem, removeItem, displayCart }