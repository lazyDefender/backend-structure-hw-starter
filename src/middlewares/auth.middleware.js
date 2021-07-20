import jwt from 'jsonwebtoken';

const isAuth = async (req, res, next) => {
    const token = req.header('authorization').split(' ')[1];

    try {
        const tokenPayload = jwt.verify(token, process.env.JWT_SECRET);
        req.tokenPayload = tokenPayload;
        next();
    }
    catch(e) {
        return res.status(401).send({ error: 'Not Authorized' });
    }
};

module.exports = isAuth;