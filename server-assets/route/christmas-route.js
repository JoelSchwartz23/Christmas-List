//Istatiates router object
const router = require('express').Router()
//Import hom Schema (Database)
let Christmas = require('../model/Christmas')

//logger
router.get('/', (req, res, next) => {
  console.log("It's Christmas")
  //allows request to continue
  next()
})

//get christmas list
router.get('/', (req, res, next) => {
  //utilizing mongoose returns all christmas list objects from database
  Christmas.find({})
    //response array from database of all christmas objects
    .then(christmaslist => {
      res.send(christmaslist)
    })
    .catch(err => {
      next()
    })
})

//get christmas list object by id
router.get('/:id', (req, res, next) => {
  Christmas.findById(req.params.id)
    .then(christmas => {
      res.send(christmas)
    })
    .catch(err => {
      next()
    })
})


//create and post christmas list
router.post('/', (req, res, next) => {
  Christmas.create(req.body)
    .then(christmas => {
      res.send(christmas)
    })
    .catch(err => {
      next()
    })
})

//edit christmas list----- /api/christmas/:id 
router.put('/:id', (req, res, next) => {
  Christmas.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(christmas => {
      res.send(christmas)
    })
    .catch(err => {
      next()
    })
})


//delete christmas list object
router.delete('/:id', (req, res, next) => {
  Christmas.findByIdAndDelete(req.params.id)
    .then(deletedChristmas => {
      res.send('deleted')
    })
    .catch(err => {
      next()
    })
})

//exports route to index
module.exports = router

