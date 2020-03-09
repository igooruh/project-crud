const express = require('express')
const personsController = require('../controllers/persons')

const personsRouter = ({ connection }) => {
    const router = express.Router()
    router.get('/', personsController.index.bind(null, connection))
    router.get('/delete/:id', personsController.deleteOnePerson.bind(null, connection))
    router.get('/create', personsController.createForm)
    router.post('/create', personsController.registerPerson.bind(null, connection))
    router.get('/update/:id', personsController.updateForm.bind(null, connection))
    router.post('/update/:id', personsController.updatePerson.bind(null, connection))

    return router
}

// export for inject of dependencies
module.exports = personsRouter
