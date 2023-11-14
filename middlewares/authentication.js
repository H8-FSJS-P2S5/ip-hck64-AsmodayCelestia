const { verifyToken } = require("../helpers/jwt")
const {User} = require('../models')

async function authentication(req, res, next) {
    // console.log(req.headers, "<<<<<<<<<");
    try{
        //1. Cek apakah user sudah login, jika sudah maka access_token harusnya ada
        // console.log(req.headers.authorization);
        const bearerToken = req.headers.authorization
        console.log(bearerToken);
        if(!bearerToken){
            throw {name: "Invalid Token"}
        }
        //2. Kita harus decode token nya
        const token = bearerToken.split(' ')[1]
        console.log(token, '<<< ini token');
        const decodeToken = verifyToken(token)
        
        //3. Kita perlu validasi ke db apakah id dalam payload ada di db
        const findUser = await User.findByPk(decodeToken.id)
        if(!findUser){ 
            throw {name: "Invalid Token"}
        }
        req.user ={
            id: findUser.id,
            username: findUser.username,
            email: findUser.email,
            role: findUser.role,
            phoneNumber: findUser.phoneNumber,
            address: findUser.address
        }
        console.log(req.user.id);
        next()
    }catch (error){
        next(error)
        // console.log(error);
    }
}
module.exports = authentication