const express = require("express")

const app = express()

app.use(express.static("public"))

app.get("/", (req, res) => {
  res.send("Hello World")
})

app.listen(8080)
console.log("Server is running on Port 8080")
