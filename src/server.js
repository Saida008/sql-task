import express from 'express'
import { config } from 'dotenv'
import router from './routes/index.routes.js'

config()

const port = process.env.PORT || 3001
const app = express()

app.use(express.json())
app.use('/api', router)

app.listen(port, () => {
    console.log(`Server is running ${port}`)
})