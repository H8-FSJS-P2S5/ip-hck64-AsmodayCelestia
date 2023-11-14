const errHandler = (err, req, res, next) =>{
    switch (err.name) {
        case "SequelizeUniqueConstraintError":
        case "SequelizeConstraintError":
        case "SequelizeValidationError":
            res.status(400).json({message: err.errors[0].message})
            break;
        case "Email/Password can't be empty":
        case "Invalid Input":
            res.status(400).json({message: err.name})
            break;
        case "Email/Password invalid":
        case "Invalid Token":
        case "JsonWebTokenError":
            res.status(401).json({message: err.name})
            break;
        case "Forbidden":
            res.status(403).json({message: err.name})
            break;
        case "Error Not Found":
            res.status(404).json({message: err.name})
            break;
        default:
            console.log(err)
            res.status(500).json({message: "Internal Server Error", errServer : err.message})
            break;
    }
}
module.exports = {errHandler}
