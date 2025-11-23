import jwt from "jsonwebtoken";

export function protectedRoute(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res
            .sendStatus(401)
            .json({ message: "No token provided!" })
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if (err) {
            return res
                .sendStatus(401)
                .json({ message: "Invalid token" })
        }
        req.user = user;
        next();
    })
}

export function adminRoute(req, res, next) {
    try {
        if (req.user && req.user.role === "admin") {
            next();
        }
    } catch (error) {
        res.status(401).json({
            error: true,
            message: "Access denied | Admin only",
        });
    }
}