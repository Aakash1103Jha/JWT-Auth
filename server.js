require("dotenv/config")

const express = require("express")
const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})

const AuthRoute = require("./src/auth-route")

app.use("/auth", AuthRoute)
app.use("/user", AuthRoute)

app.use("/", async (req, res, next) => {
	res.send("404 - Page Not Found")
	next()
})
