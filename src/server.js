
import express from 'express'
import { config } from 'dotenv'
import router from './routes/index.routes.js'

config()

const port = process.env.PORT || 3001
const app = express()

app.use(express.json())

app.use((req,res,next)=>{
    console.log(`${req.method} ${req.originalUrl}`)
    next()
})


app.use('/api', router)

app.listen(port, () => {
    console.log(`Server is running ${port}`)
})


