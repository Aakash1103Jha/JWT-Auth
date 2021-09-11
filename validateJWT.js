require("dotenv/config")
const jwt = require("jsonwebtoken")

exports.validateJWT = async (req, res, next) => {
	const token = req.header("Authorization")
	if (!token) {
		return res.json("Invalid or no token found")
	}
	jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
		if (err) {
			return res.json("Invalid user")
		}
		req.user = user
		next()
	})
}
