# JWT Token and Protected Routes in Node.js

### This is a documentation of all that has been done in order to generate a JWT token and make protected routes using a middleware that verifies the generated JWT. This module assumes that the user has already registered and provided valid login credentials.

• `auth-controller.js` - contains all the authentication logic. (Right now, it is assumed that all the validations are done and the user has entered valid credentials.)

• `auth-route.js` - contains the all the routes. This is the place where any middleware will be added.

• `validateJWT.js` - contains the middleware that verifies the generated JWT and is added to routes to protect it.

• `API.rest` - to test APIs.

• `test.js` - contains a functions that acts as a dummy client, that tries to access protected routes and resolved the result if JWT is valid.

## Flow

_Expect error to be thrown or logged in console in where ever it should be._

User -> Registers -> Success -> Login -> Provides email and password -> If credentials are correct, JWT is generated and set as a header.

User (after login) visits a PROTECTED route -> `validateJWT` middleware validates the JWT in header using the `jwt.verrify()` function -> user is added to request is token is valid
