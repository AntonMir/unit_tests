const axios = require('axios')
const mapArrToString = require('../mapArrToString/mapArrToString')

const getData = async () => {
    try{
        const responce = await axios.get('https://jsonplaceholder.typicode.com/users')
        const userIds = await responce.data.map(user => user.id)
        return mapArrToString(userIds)
        // return userIds
    } catch(error) {
        console.log('Error!!!')
        throw new Error(error)
    }
}

module.exports = getData