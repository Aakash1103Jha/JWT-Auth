const router = require("express").Router()
const AuthController = require("./auth-controller")
const { validateJWT } = require("./validateJWT")

router.post("/login", AuthController.postLogin)
router.get("/login", AuthController.getLogin)
router.get("/home", validateJWT, AuthController.getHome)
router.get("/profile", validateJWT, AuthController.getProfile)

module.exports = router
