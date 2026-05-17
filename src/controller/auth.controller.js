import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { pool } from '../config/db.js'

const register = async (req, res) => {
    try {
        const { username, email, password } = req.body

        const existing = await pool.query(
            'SELECT id FROM users WHERE email=$1',
            [email]
        )

        if (existing.rows.length > 0) {
            return res.status(400).json({
                success: false,
                message: 'Bu email allaqachon ro‘yxatdan o‘tgan'
            })
        }

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        const newUser = await pool.query(
            'INSERT INTO users(username, email, password) VALUES($1, $2, $3) RETURNING id, username, email',
            [username, email, hashPassword]
        )

        res.status(201).json({
            success: true,
            message: 'Foydalanuvchi muvaffaqiyatli ro‘yxatdan o‘tdi',
            data: newUser.rows[0]
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body

        const authLogin = await pool.query(
            'SELECT * FROM users WHERE email=$1',
            [email]
        )

        if (authLogin.rows.length === 0) {
            return res.status(401).json({
                success: false,
                message: 'Email yoki parol xato'
            })
        }

        const user = authLogin.rows[0]

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: 'Email yoki parol xato'
            })
        }

        const token = jwt.sign(
            {
                id: user.id,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRES || '1d'
            }
        )

        res.status(200).json({
            success: true,
            message: 'Muvaffaqiyatli tizimga kirdingiz',
            token,
            data: {
                id: user.id,
                username: user.username,
                email: user.email
            }
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

export {
    register,
    login
}