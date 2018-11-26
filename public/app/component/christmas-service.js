import Christmas from '../model/christmaslist.js'


// @ts-ignore
let api = axios.create({
  baseURL: "//localhost:3000/api/christmas"
})

let _christmaslist = []

function handleError(err) {
  throw new Error(err)
}


export default class ChristmasService {

  addChristmas(formData, cb) {
    api.post('', formData)
      .then(res => {
        this.getChristmas(cb)
      })
      .catch(handleError)
  }

  delete(id, draw) {
    api.delete(id).then(res => {
      this.getChristmas(draw)
    })
      .catch(handleError)
  }


  getChristmas(cb) {
    api.get('')
      .then(res => {
        console.log(res.data)
        _christmaslist = res.data.map(list => new Christmas(list))
        cb()
      })
      .catch(handleError)
  }

  get christmaslist() {
    return _christmaslist
  }
}