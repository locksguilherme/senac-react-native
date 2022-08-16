import { DataSource } from "typeorm"
import { User } from "./src/entity/User"

const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "postgres",
    entities: [User],
    logging: false,
    synchronize: true
})


