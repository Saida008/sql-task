// import {Pool} from 'pg'
// import pg from "pg"
// import {config} from 'dotenv'
// config()

// const pool=new Pool({
//     user: process.env.DB_USER || 'postgres',
//     password:String ( process.env.DB_PASSWORD),
//     host:process.env.DB_host || 'localhost',
//     port:parseInt(process.env.DB_PORT) || 5432,
//     database:process.env.DB_NAME
// })

// pool.on('error', (err)=>{
//     console.error('Database Error', err.message)
// })

//    export {
//     pool
//    }
import { Pool } from "pg"
import { config } from "dotenv"

config()

const pool = new Pool({
    user: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    database: process.env.DB_NAME
})

pool.on("error", (err) => {
    console.error("Database Error", err.message)
})

export { pool }