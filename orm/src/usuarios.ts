import * as express from "express"
import { Request, Response } from "express"
import dataSource from './datasource'
import { User }  from './entity/User'

const router = express.Router()

dataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err)=>{
        console.log("Error during Data Source initialization" + err)
    })

router.get('/', async (req: Request, res: Response) => {
    const results = await dataSource.getRepository(User).find();
    res.json(results)
})

router.post('/', async (req: Request, res: Response) => {
    const user = req.body
    const result = await dataSource.getRepository(User).save(user)
    res.send(result)
})

export default router
