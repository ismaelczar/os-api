import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Client } from "./Clients";

@Entity('tickets')
export class Tickets {

  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'varchar' })
  type: string

  @Column({ type: 'varchar' })
  request_name: string

  @Column({ type: 'uuid' }) // coluna que armazena as chaves estrangeiras
  company_name_id: string

  @ManyToOne(() => Client)
  @JoinColumn({ name: 'company_name_id' }) // coluna que faz o relacionamento entre as tabelas
  company: Client

  @Column({ type: 'varchar' })
  company_name: string

  @Column({ type: 'varchar' })
  complaint: string

  @Column({ type: 'varchar' })
  attendant: string

  @Column({ type: 'varchar' })
  status: string

  @Column({ type: 'varchar' })
  position: string

  @Column({ type: 'varchar' })
  solution: string

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updated_at: Date;
}
