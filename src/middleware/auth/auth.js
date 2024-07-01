const jwt = require('jsonwebtoken');
const private_key = process.env.JWT_KEY;

const auth = (req, res, next) => {
    const authorization = req.headers.authorization;

    if (!authorization) {
        const error = "Vous n'avez pas fourni un jeton d'autorisation";
        return res.status(401).json({ error });
    }

    const token = authorization.split(' ')[1];
    jwt.verify(token, private_key, (err, decoded) => {
        if (err) {
            const error = err.name === 'TokenExpiredError' 
                ? "Le jeton a expiré. Veuillez vous reconnecter." 
                : "Vous n'avez pas l'autorisation de connexion ! Veuillez réessayer plus tard.";
            return res.status(403).json({ error });
        }

        req.userId = decoded.userId; // Ajoutez les informations décodées à la requête pour une utilisation ultérieure
        next();
    });
}

module.exports = auth;
