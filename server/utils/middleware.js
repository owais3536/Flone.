import jwt from "jsonwebtoken";

export async function protectedRoute(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(401);
        req.user = user;
        next();
    })
}

export async function adminRoute(req, res, next) {
    try {
        if (res.user && req.user.role === "admin") {
            next();
        }
    } catch (error) {
        res.status(401).json({
            error: true,
            message: "Access denied | Admin only",
        });
    }
}