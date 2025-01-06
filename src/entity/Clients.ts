import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Tickets } from './Tickets';

@Entity('clients')
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  code: string;

  @Column({ type: 'varchar' })
  company_name: string;

  @Column({ type: 'varchar' })
  cgc: string;

  @Column({ type: 'varchar' })
  company_fantasy: string;

  @Column({ type: 'varchar' })
  postal_code: string;

  @Column({ type: 'varchar' })
  street: string;

  @Column({ type: 'varchar' })
  street_number: string;

  @Column({ type: 'varchar' })
  neighborhood: string;

  @Column({ type: 'varchar' })
  city: string;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar' })
  phone_number: string;

  @Column({ type: 'text' })
  notes: string;

  @OneToMany(() => Tickets, (ticket) => ticket.company) // Relacionamento inverso
  tickets: Tickets[]

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updated_at: Date;
}
