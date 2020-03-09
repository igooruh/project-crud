const findAll = connection => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM PERSONS', (err, results) => {
            err ? reject(err) : resolve(results)
        })
    })
}

const findById = (connection, id) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM PERSONS WHERE ID = ${id}`, (err, results) => {
            err ? reject(err) : results.length > 0 ? resolve(results[0]) : resolve({})
        })
    })
}

const deleteID = (connection, id) => {
    return new Promise((resolve, reject) => {
        connection.query(`DELETE FROM PERSONS WHERE ID = ${id} LIMIT 1`, (err, results) => {
            err ? reject(err) : resolve(results)
        })
    })
}

const insertPerson = (connection, data) => {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO PERSONS(NAME, BIRTH_DAY, CAREER) VALUE('${data.name}', '${data.birth_day}', '${data.career}')`, err => {
            err ? reject(console.error(err)) : resolve(console.log('Successfully saved'))
        })
    })
}

const updatePerson = (connection, id, data) => {
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE PERSONS SET NAME='${data.name}', BIRTH_DAY='${data.birth_day}', CAREER='${data.career}' WHERE ID=${id}`, err => {
            err ? reject(console.error(err)) : resolve(console.log('Successfully saved'))
        })
    })
}

module.exports = {
    findAll,
    findById,
    deleteID,
    insertPerson,
    updatePerson
}
