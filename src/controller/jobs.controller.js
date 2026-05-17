
// import { pool } from "../config/db.js"

// const search = async (req, res) => {
//   try {
//     const result = await pool.query("SELECT * FROM job")

//     res.status(200).json({
//       success: true,
//       count: result.rows.length,
//       data: result.rows
//     })

//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: error.message
//     })
//   }
// }

// const add = async (req, res) => {
//   try {
//     const { title } = req.body

//     if (!title) {
//       return res.status(400).json({
//         success: false,
//         message: "Title kiritilishi shart"
//       })
//     }

//     const newUser = await pool.query(
//       "INSERT INTO job (title) VALUES ($1) RETURNING *",
//       [title]
//     )

//     res.status(201).json({
//       success: true,
//       message: "Job qoshildi",
//       data: newUser.rows[0]
//     })

//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     })
//   }
// }

// const update = async (req, res) => {
//   try {
//     const { id } = req.params
//     const { title } = req.body

//     const updatedJob = await pool.query(
//       "UPDATE job SET title=$1 WHERE id=$2 RETURNING *",
//       [title, id]
//     )

//     if (updatedJob.rows.length === 0) {
//       return res.status(404).json({
//         success: false,
//         message: "Job topilmadi"
//       })
//     }

//     res.status(200).json({
//       success: true,
//       message: "Job yangilandi",
//       data: updatedJob.rows[0]
//     })

//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     })
//   }
// }

// const remove = async (req, res) => {
//   try {
//     const { id } = req.params

//     const deletedJob = await pool.query(
//       "DELETE FROM job WHERE id=$1 RETURNING *",
//       [id]
//     )

//     if (deletedJob.rows.length === 0) {
//       return res.status(404).json({
//         success: false,
//         message: "Job topilmadi"
//       })
//     }

//     res.status(200).json({
//       success: true,
//       message: "Job ochirildi"
//     })

//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     })
//   }
// }

// export {
//   search,
//   add,
//   update,
//   remove
// }




// import { pool } from "../config/db.js"

// class JobController {

//   async search(req, res) {
//     try {
//       const result = await pool.query("SELECT * FROM job")

//       res.status(200).json({
//         success: true,
//         count: result.rows.length,
//         data: result.rows
//       })

//     } catch (error) {
//       res.status(500).json({
//         success: false,
//         message: error.message
//       })
//     }
//   }

//   async add(req, res) {
//     try {
//       const { title } = req.body

//       const newJob = await pool.query(
//         "INSERT INTO job(title) VALUES($1) RETURNING *",
//         [title]
//       )

//       res.status(201).json({
//         success: true,
//         data: newJob.rows[0]
//       })

//     } catch (error) {
//       res.status(500).json({
//         success: false,
//         message: error.message
//       })
//     }
//   }

//   async update(req, res) {
//     try {
//       const { id } = req.params
//       const { title } = req.body

//       const updatedJob = await pool.query(
//         "UPDATE job SET title=$1 WHERE id=$2 RETURNING *",
//         [title, id]
//       )

//       res.status(200).json({
//         success: true,
//         data: updatedJob.rows[0]
//       })

//     } catch (error) {
//       res.status(500).json({
//         success: false,
//         message: error.message
//       })
//     }
//   }

//   async remove(req, res) {
//     try {
//       const { id } = req.params

//       await pool.query(
//         "DELETE FROM job WHERE id=$1",
//         [id]
//       )

//       res.status(200).json({
//         success: true,
//         message: "Job ochirildi"
//       })

//     } catch (error) {
//       res.status(500).json({
//         success: false,
//         message: error.message
//       })
//     }
//   }

// }

// export default new JobController()

import { pool } from "../config/db.js"

class JobController {

  search = async (req, res) => {
    try {
      const result = await pool.query("SELECT * FROM job")

      res.status(200).json({
        success: true,
        count: result.rows.length,
        data: result.rows
      })

    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      })
    }
  }

  add = async (req, res) => {
    try {
      const { title } = req.body

      const newJob = await pool.query(
        "INSERT INTO job(title) VALUES($1) RETURNING *",
        [title]
      )

      res.status(201).json({
        success: true,
        data: newJob.rows[0]
      })

    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      })
    }
  }

  update = async (req, res) => {
    try {
      const { id } = req.params
      const { title } = req.body

      const result = await pool.query(
        "UPDATE job SET title=$1 WHERE id=$2 RETURNING *",
        [title, id]
      )

      res.status(200).json({
        success: true,
        data: result.rows[0]
      })

    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      })
    }
  }

  remove = async (req, res) => {
    try {
      const { id } = req.params

      await pool.query(
        "DELETE FROM job WHERE id=$1",
        [id]
      )

      res.status(200).json({
        success: true,
        message: "Job deleted"
      })

    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      })
    }
  }
}

export default new JobController()
