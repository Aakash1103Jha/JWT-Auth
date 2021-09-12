const axios = require("axios")

const getData = async () => {
	try {
		const response = await axios.get("http://localhost:3500/user/profile", {
			method: "POST",
			headers: {
				Authorization:
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFha2FzaEBtZS5jb20iLCJpYXQiOjE2MzEzODQ2ODN9.oztMiEW1HvltrwZmXwthyp6URETfei9i-4ifbrKYQ5s",
				"Content-Type": "application/json",
			},
		})
		const data = await response.data
		console.log(data)
	} catch (err) {
		console.error({ Error: err })
	}
}

getData()
