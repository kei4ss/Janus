import express from 'express'

import userRouter from "./routes/userRouter.js"

const PORT = 3000

function startServer() {
    const app = express()

    app.use(express.json())
    app.use("/user", userRouter)

    // Rota de teste
    app.get('/', (req, res) => {
        res.status(200)
        res.json({ msg: "Subi talvez às máximas alturas. Mas, se hoje volto assim, com a aula às escuras. É necessário que ainda eu suba mais!" })
    })
    
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`)
    })
}
export default startServer
