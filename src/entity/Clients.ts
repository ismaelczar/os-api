import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('clients')
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 35 })
  name: string;

  @Column({ type: 'varchar', length: 18 })
  cgc: string;

  @Column({ type: 'varchar', length: 35 })
  fantasy: string;

  @Column({ type: 'varchar', length: 14 })
  cep: string;

  @Column({ type: 'varchar', length: 35 })
  address: string;

  @Column({ type: 'varchar', length: 10 }) // Alterado de int para suportar complementos
  streetNumber: string;

  @Column({ type: 'varchar', length: 35 })
  district: string;

  @Column({ type: 'varchar', length: 35 })
  city: string;

  @Column({ type: 'varchar', length: 35 })
  email: string;

  @Column({ type: 'varchar', length: 20 }) // Ajustado o comprimento
  phone: string;

  @Column({ type: 'text', nullable: true }) // Observações podem ser opcionais
  observations: string;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  createDate: Date;
}
