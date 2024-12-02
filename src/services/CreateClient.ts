import { parseISO } from 'date-fns';
import { ClientsRepository } from '../repositories/Clients.repository';

interface Request {
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
  createDate: string;
}

export class CreateClient {
  private createClient: ClientsRepository;

  constructor(createClient: ClientsRepository) {
    this.createClient = createClient;
  }

  public execute({
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
  }: Request) {
    const createDateCLient = parseISO(createDate);

    const client = this.createClient.create({
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
      createDate: createDateCLient,
    });

    return client;
  }
}
