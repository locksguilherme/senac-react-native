import * as express from "express"
import { Request, Response } from "express"
import dataSource from './datasource'
import {User}  from './entity/User'

dataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err)=>{
        console.log("Error during Data Source initialization" + err)
    })

const app = express()
app.use(express.json())

app.get('/user', async (req: Request, res: Response) => {
    const users = await dataSource.getRepository(User).find()
    res.json(users)
})

app.post('/user', async (req: Request, res: Response) => {
    const user = req.body
    const result = await dataSource.getRepository(User).save(user)
    res.send(result)
})

const PORT = process.env.PORT
app.listen(PORT, () => { console.log(`executando em http://localhost:${PORT}`)})

