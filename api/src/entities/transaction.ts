import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./user";

@Entity()
export default class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  amount: number;

  @Column({ nullable: false })
  description: string

  @Column({ nullable: false })
  type: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'idUser', referencedColumnName: 'id' })
  user: User;
}