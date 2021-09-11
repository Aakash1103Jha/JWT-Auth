require("dotenv/config")

const jwt = require("jsonwebtoken")

exports.getLogin = async (req, res, next) => {
	return res.send("Login Route")
}

exports.postLogin = async (req, res, next) => {
	if (!req.body) {
		return res.json({ Error: "No valid inputs found" })
	}
	console.log(req.body)
	const email = req.body.email
	const password = req.body.password

	if (email !== "aakash@me.com" || password !== "12345") {
		return res.json({ Error: "Invalid email or password" })
	}

	const token = jwt.sign({ email: email }, process.env.JWT_SECRET)
	res.header("authToken", token)
	return res.json({ authToken: token })
}

exports.postRegister = async (req, res, next) => {
	if (!req.body) {
		return res.json({ Error: "No valid inputs found" })
	}
}

exports.getHome = async (req, res, next) => {
	return res.json("Homepage")
}
exports.getProfile = async (req, res, next) => {
	return res.json("Profile")
}
