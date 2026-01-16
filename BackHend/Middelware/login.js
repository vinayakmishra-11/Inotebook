const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "VinayakMishraIsGreat";
const fetchuser = (req,res,next) =>{
    // get the user from the jwt token and add id to re object
    const token = req.header('auth-token');
    if(!token){
        return res.status(401).send({error  : " Please authanticate "});
    }
    try {
         const data = jwt.verify(token,JWT_SECRET);
    req.user = data.user;
    next();
    } catch (error) {
         return res.status(401).send({error  : " Please authanticate "});
    }
}
module.exports = fetchuser;
