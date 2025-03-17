async function makePostRequest(url,options) {
    try{
        const response = await fetch(url,options)
    if(!response.ok){
        throw new Error('Test')
    }
    else return response.json().message
    }
    catch(error){console.error('Error in request:', error)}
}

let url = "https://hook.us1.make.com/jlh8u51gvopaq7ugnfnmdp01le51rmoe"
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
const test = await  makePostRequest(url,options)
console.log(test)