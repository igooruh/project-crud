const personsModel = require('../models/persons')

const index = async(connection, req, res) => {
    const personsResults = await personsModel.findAll(connection)
    res.render('persons/index', {persons:  personsResults})
}

const deleteOnePerson = async(connection, req, res) => {
    await personsModel.deleteID(connection, req.params.id)
    res.redirect('/persons')
}

const createForm = (req, res) => {
    res.render('persons/create')
}

const registerPerson = async(connection, req, res) => {
    await personsModel.insertPerson(connection, req.body)
    res.redirect('/persons')
}

module.exports = {
    index,
    deleteOnePerson,
    createForm,
    registerPerson
}
