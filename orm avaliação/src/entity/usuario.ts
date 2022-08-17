import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { Photo } from "./photo"


@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(() => Photo,(photo)=> photo.user)
    photos: Photo[]
}
