/*
Last Update: Created the environment and git ignore files,
looking to utilize AT API instead Relay to get some additional practice in.
*/

//Necessary Variables
require('dotenv').config();
const express = require('express')
const axios = require('axios')
const airtable = require('airtable')
const app = express()
const port = 405
const atKey = process.env.AT_KEY
const baseID = 'app8i8E6sZ9v8Qm7m'
const base = new airtable({apiKey: atKey}).Base(baseID)

//Functions
async function makePostRequest(url,postData) {
    try {
        const response = await axios.post(url, postData);
        console.log("Response Data:", response.data);
    } catch (error) {
        console.error("Error:", error.response ? error.response.data : error.message);
    }
}

function chunkArray (array,chunkSize){
    /* Takes objects from a request array and batches them into a specific size */
    let chunk = []
    for(let i = 0; i < array.length; i += chunkSize){
        chunk.push(array.slice(i, i + chunkSize))
    }
    return chunk
}


app.use(express.json())

app.get('/get-basics', (req,res) => {
    let url = "https://run.relay.app/api/v1/playbook/cm8e01lz50em00pm29bmud880/trigger/UjH4BxqIUOQZKoBXHKVHCw"
    let data = {
        name: 'justus',
        age: 24,
        email: 'justus@email.com'
    }
    let options = {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    }
    console.log(makePostRequest(url,options))
    res.send("Complete")
})
app.post('/post/add_db', (req,res) =>{
    let request = req

    res.send(req)
})
app.post('/batch request', (req,res) =>{
    let batchSize = 10
    let records = []
    let batchArray = chunkArray(req,batchSize)
    for(batch of batchArray){
        makePostRequest()
    }
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})