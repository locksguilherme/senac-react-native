import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm"
import { Usuario } from "./usuario"
 
@Entity()
export class Photo {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    url:string

    @ManyToOne(() => Usuario, (user) => user.photos)
    @JoinColumn({name:'user_id'})
    user: Usuario
}
