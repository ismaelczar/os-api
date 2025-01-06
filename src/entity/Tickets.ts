import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('tickets')
export class Tickets {

  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'varchar' })
  type: string

  @Column({ type: 'varchar' })
  request_name: string

  @Column({ type: 'varchar' })
  company_name_id: string

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
