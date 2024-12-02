import { uuid } from 'uuidv4';

export class Client {
  id: string;

  name: string;

  cgc: string;

  fantasy: string;

  cep: string;

  address: string;

  streetNumber: number;

  district: string;

  city: string;

  email: string;

  phone: string;

  observations: string;

  createDate: Date;

  constructor({
    name,
    cgc,
    fantasy,
    cep,
    address,
    streetNumber,
    district,
    city,
    email,
    observations,
    phone,
    createDate,
  }: Omit<Client, 'id'>) {
    this.id = uuid();
    this.name = name;
    this.cgc = cgc;
    this.fantasy = fantasy;
    this.cep = cep;
    this.address = address;
    this.streetNumber = streetNumber;
    this.district = district;
    this.city = city;
    this.email = email;
    this.phone = phone;
    this.observations = observations;
    this.createDate = createDate;
  }
}
