import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm"
import { Categoria } from "./categoria"

@Entity("produto")
export class Produto {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    Descricao: string

    @Column()
    preco: string

    @Column()
    estoque: number

    @OneToOne(() => Categoria)
    @JoinColumn({name:"id_categoria"})
    profile: Categoria
}
