export default class Christmas {
  constructor(data) {
    if (!data.name || !data.price) {
      throw new Error("Invalid Christmas List Creation")
    }
    this.name = data.name
    this.img = data.img
    this.price = data.price
    this.purchase = data.purchase
    this.color = data.color
    this.size = data.size
    this.shoesize = data.shoesize
    this.quantity = data.quantity
    this.reason = data.reason
  }
}