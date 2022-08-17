
import { DataSource } from "typeorm"
import { Categoria } from "./entity/categoria"
import { Photo } from "./entity/photo"
import { Produto } from "./entity/produto"
import { Profile } from "./entity/profile"
import { User } from "./entity/User"
import { Usuario} from "./entity/usuario"
import { Question} from "./entity/questoes"


const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "postgres",
    entities: [User,Profile, Categoria,Produto,Photo, Usuario, Question],
    synchronize: true,
    logging: false,
})

export default dataSource