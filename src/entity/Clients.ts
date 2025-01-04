import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('clients')
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  code: string;

  @Column()
  company_name: string;

  @Column()
  cgc: string;

  @Column()
  company_fantasy: string;

  @Column()
  postal_code: string;

  @Column()
  street: string;

  @Column()
  street_number: string;

  @Column()
  neighborhood: string;

  @Column()
  city: string;

  @Column()
  email: string;

  @Column()
  phone_number: string;

  @Column()
  notes: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
