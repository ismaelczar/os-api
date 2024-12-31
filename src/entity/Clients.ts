import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('clients')
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  cgc: string;

  @Column()
  fantasy: string;

  @Column()
  cep: string;

  @Column()
  address: string;

  @Column()
  streetNumber: number;

  @Column()
  district: string;

  @Column()
  city: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  observations: string;

  @Column('timestamp with time zone')
  createDate: Date;
}
