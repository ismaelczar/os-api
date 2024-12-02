import { Client } from '../models/Clients';

export class ClientsRepository {
  private clients: Client[];

  constructor() {
    this.clients = [];
  }

  public findAll() {
    return this.clients;
  }

  public create({
    name,
    cgc,
    address,
    cep,
    city,
    district,
    email,
    fantasy,
    observations,
    phone,
    streetNumber,
    createDate,
  }: Omit<Client, 'id'>) {
    const client = new Client({
      name,
      cgc,
      address,
      cep,
      city,
      district,
      email,
      fantasy,
      observations,
      phone,
      streetNumber,
      createDate,
    });

    this.clients.push(client);

    return client;
  }
}
