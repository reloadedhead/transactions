import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./user";

@Entity()
export default class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal', { nullable: false, precision: 5, scale: 2 })
  amount: number;

  @Column({ nullable: false })
  description: string

  @Column({ nullable: false })
  type: string;

  @Column({ nullable: false })
  idUser: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'idUser', referencedColumnName: 'id' })
  user: User;
}