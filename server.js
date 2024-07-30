const dataObj = require("./cjs/data.js")
const http = require("node:http")

const server = http.createServer((req, res) => {
    console.log("Request sucess")
    res.end(
        `
            <h1>${dataObj.title}</h1>
            <h2>${dataObj.subtitle}</h2>
            <p>${dataObj.description}</p>
        `
    )
})

server.listen(0, () => {
    console.log(`Enlace al server es http://localhost:${server.address().port}`)
})