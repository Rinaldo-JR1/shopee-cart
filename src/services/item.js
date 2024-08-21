async function createItem(name, price, quantity) {
  return {
    name,
    price,
    quantity,
    subtotal: () => {
      return quantity * price
    }
  }
}
export { createItem }