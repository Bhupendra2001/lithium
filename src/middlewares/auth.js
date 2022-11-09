const jwt = require("jsonwebtoken");

const authenticate = function (req, res, next) {

    try {
        let token = req.headers["x-auth-token"];

        if (!token)
            return res.status(400).send({ status: "TOKEN NOT FOUND" });

        console.log(token);

        let decodedToken = jwt.verify(token, "highly confidential");

        if (!decodedToken)
            return res.status(401).send({ status: "AUTHENTICATION MISSING", msg : "login is required" });

        next()
    }
    catch (err) {
        res.status(500).send({ status : "SERVER ERROR", error : err.message })
    }
}


const authorize = function (req, res, next) {

    try {
        let token = req.headers["x-auth-token"]

        if (!token) return res.status(400).send({ status: "TOKEN NOT FOUND"})

        let decodedToken = jwt.verify(token, 'highly confidential')

        if (!decodedToken) return res.status(401).send({ status: "AUTHENTICATION MISSING", msg : "login is required" })

        let userToBeModified = req.params.userId

        let userLoggedIn = decodedToken.userId

        if (userToBeModified != userLoggedIn) return res.status(403).send({ status: "NOT AUTHENTICATED OR FORBIDDEN", msg: 'User logged is not authorise person to modify the requested users data' })

        next()
    }
    catch (err) {
        res.status(500).send({ status : "SERVER ERROR",error: err.message })
    }
}

module.exports.authenticate = authenticate
module.exports.authorize = authorize