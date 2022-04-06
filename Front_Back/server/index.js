const express = require("express")
const cors = require("cors")


const usersArray = [
    { id: 1, name: "Wolfgang", username: "wolfy" },
    { id: 2, name: "Anna", username: "anna" },
    { id: 3, name: "Peter", username: "peter" },
]

// const users = require("./userlist.json")
const PORT = 2304




const app = express()

app.use(cors()) // localhost: 3000(frontend) ----> localhost: 9000(backend)
    // random text

app.use(express.json()) // body parser

app.use((req, _, next) => {
    console.log("Neue Request", req.method, req.url);
    next()
})


app.get('/users', (_, res) => {
    res.json(usersArray)
})

app.post("/newUser",
    (req, res) => {
        const user = req.body
        const lastId = usersArray[usersArray.length - 1] ? usersArray[usersArray.length - 1].id : 1
        const userWithId = {...user, id: lastId + 1 } //
        usersArray.push(userWithId)
        res.json(usersArray)
    }
)


app.listen(PORT, () => console.log("Server listening to port", PORT))