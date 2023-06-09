import jwt from 'jsonwebtoken';


const JWT_SECRET = process.env.JWT_SECRET


/** auth middleware */
export default async function Auth(req, res, next){
    try {
        
        // access authorize header to validate request
        const token = req.headers.authorization.split(" ")[1];

        // retrive the user details fo the logged in user
        const decodedToken = await jwt.verify(token, JWT_SECRET);

        console.log('====================================');
        console.log('the users', req.tutor);
        console.log('====================================');

        req.tutor = decodedToken;

        next()

    } catch (error) {
        console.log('====================================');
        console.log('the error in auth', error);
        console.log('====================================');
        res.status(401).json({ error : "Authentication Failed!"})
    }
}


export function localVariables(req, res, next){
    req.app.locals = {
        OTP : null,
        resetSession : false
    }
    next()
}
