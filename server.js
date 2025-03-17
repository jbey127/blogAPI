const express = require('express')
const app = express()
const port = 400

async function makePostRequest(url,options) {
    try{
        const response = await fetch(url,options)
    if(!response.ok){
        throw new Error('Test')
    }
    else return response.json()
    }
    catch(error){console.error('Error in request:', error)}
}

app.use(express.json())

app.get('/path1', (req,res) => {
    let url = "https://hook.us1.make.com/fx296qxevswyktyrvggivbkx6y4bp4cm"
    let data = {
        name: 'justus',
        age: 24,
        email: 'justus@coioconsultation.com'
    }
    let options = {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    }
    makePostRequest(url,options)
    res.send("Complete")
})
app.listen(port, () =>{
    console.log(`Server started on port: ${port}`)
} )