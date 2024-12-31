import { parseISO } from 'date-fns';
import { ClientsRepository } from '../repositories/Clients.repository';
import { getCustomRepository } from 'typeorm';

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

export class CreateClient extends ClientsRepository {
  public async execute({
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
    const clientsRepository = getCustomRepository(ClientsRepository);
    const createDateCLient = parseISO(createDate);

    const client = clientsRepository.create({
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

    await clientsRepository.save(client);
    return client;
  }
}
