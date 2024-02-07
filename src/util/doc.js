'use strict'

const firebase = require('../server/db')
const firestore = firebase.firestore()

const addDoc = async (req, res) => {
    try {
        const doc = await firestore.collection('students').doc().set(req)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = {
    addDoc
}