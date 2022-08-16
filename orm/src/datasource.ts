
import { DataSource } from "typeorm"
import { User } from "./entity/User"


const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234",
    database: "postgres",
    entities: [User],
    synchronize: true,
    logging: false,
})

export default AppDataSource