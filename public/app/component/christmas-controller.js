import ChristmasService from './christmas-service.js'

let _clService = new ChristmasService()


export default class ChristmasController {
  constructor() {
    _clService.getChristmas(this.showChristmas)
  }

  showChristmas() {
    let christmaslist = _clService.christmaslist
    let christmastemplate = ""
    let formtemplate = ""
    christmaslist.forEach(christmas => {
      christmastemplate += `
   <div class="col-sm-3 card">
          <h5>${christmas.name}</h5>
          <img src="${christmas.img}" width="150px" height="150px">
          <h4>Price: ${christmas.price}</h4>
          <p>Where to buy: ${christmas.purchase}</p>
          <p>Color: ${christmas.color}</p>
          <p>Size(Clothing): ${christmas.size}</p>
          <p>Shoesize: ${christmas.shoesize}</p>
          <p>Quantity: ${christmas.quantity}</p>
          <p>Reason: ${christmas.reason}</p>
          <button class="btn btn-danger" onclick="app.controllers.christmasController.delete('${christmas._id}')">Remove Gift</button>
        </div>
    `
    })
    formtemplate += `
      <form onsubmit="app.controllers.christmasController.addChristmas(event)">
    <div class="form-group">
      <label for="Name">Name:</label>
      <input type="text" name="Name" />
    </div>
    <div class="form-group">
      <label for="img">Image:</label>
      <input type="url" name="Img" />
    </div>
    <div class="form-group">
      <label for="Price">Price:</label>
      <input type="text" name="Price" />
    </div>
    <div class="form-group">
      <label for="Purchase">Where to buy:</label>
      <input type="text" name="Purchase" />
    </div>
    <div class="form-group">
      <label for="Color">Color:</label>
      <input type="text" name="Color" />
    </div>
    <div class="form-group">
      <label for="Size">Size(Clothing Male/Female):</label>
      <input type="text" name="Size" />
    </div>
    <div class="form-group">
      <label for="Shoesize">Shoe-size(Please add Male/Female):</label>
      <input type="text" name="Shoesize"></input>
    </div>
    <div class="form-group">
      <label for="Quantity">Quantity:</label>
      <input type="number" name="Quantity"></input>
    </div>
    <div class="form-group">
      <label for="Reason">Reason:</label>
      <textarea type="text" name="Reason"></textarea>
    </div>
    <button type="submit">Add to Christmas List!</button>
  </form>
    `

    document.getElementById('form').innerHTML = formtemplate
    document.getElementById('christmas').innerHTML = christmastemplate
  }

  addChristmas(event) {
    event.preventDefault();
    let form = event.target
    let formData = {
      name: form.Name.value,
      price: form.Price.value,
      purchase: form.Purchase.value,
      color: form.Color.value,
      size: form.Size.value,
      shoesize: form.Shoesize.value,
      quantity: form.Quantity.value,
      reason: form.Reason.value,
      img: form.Img.value
    }
    _clService.addChristmas(formData, this.showChristmas)
    form.reset
  }

  delete(id) {
    _clService.delete(id, this.showChristmas)
  }
}