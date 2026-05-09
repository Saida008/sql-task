
import { pool } from '../config/db.js'

const searchEmployer = async (req, res) => {
    try {
        const employer = await pool.query("SELECT * FROM employer")

        res.status(200).json({
            success: true,
            count: employer.rows.length,
            data: employer.rows
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

const addEmployer = async (req, res) => {
    try {
        const { name, degree, salary, job_id } = req.body

        if (!name || !degree || !salary || !job_id) {
            return res.status(400).json({
                success: false,
                message: "Barcha malumotlarni toliq kiriting"
            })
        }

        const newUser = await pool.query(
            "INSERT INTO employer (name, degree, salary, job_id) VALUES($1, $2, $3, $4) RETURNING *",
            [name, degree, salary, job_id]
        )

        res.status(201).json({
            success: true,
            message: "Employer qoshildi",
            data: newUser.rows[0]
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

const updateEmployer = async (req, res) => {
    try {
        const { id } = req.params
        const { name, degree, salary, job_id } = req.body

        const updatedEmployer = await pool.query(
            `UPDATE employer
             SET name=$1, degree=$2, salary=$3, job_id=$4
             WHERE id=$5
             RETURNING *`,
            [name, degree, salary, job_id, id]
        )

        if (updatedEmployer.rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Employer topilmadi"
            })
        }

        res.status(200).json({
            success: true,
            message: "Employer yangilandi",
            data: updatedEmployer.rows[0]
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const deleteEmployer = async (req, res) => {
    try {
        const { id } = req.params

        const deletedEmployer = await pool.query(
            "DELETE FROM employer WHERE id=$1 RETURNING *",
            [id]
        )

        if (deletedEmployer.rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Employer topilmadi"
            })
        }

        res.status(200).json({
            success: true,
            message: "Employer ochirildi"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export {
    searchEmployer,
    addEmployer,
    updateEmployer,
    deleteEmployer
}