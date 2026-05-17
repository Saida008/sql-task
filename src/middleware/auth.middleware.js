import jwt from 'jsonwebtoken'

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) {
        return res.status(404).json({
            success: false,
            message: 'Token mavjud emas. Avval tizimga kiring'
        })
    }

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET)

        req.user = decode
        next()

    } catch (err) {
        return res.status(403).json({
            success: false,
            message: 'Token xato yoki muddati tugagan'
        })
    }
}

export {
    authMiddleware
}