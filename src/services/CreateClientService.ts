import { parseISO } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import { ClientsRepository } from '../repositories/Clients.repository';
import { Client } from '../entity/Clients';

interface Request {
  name: string;
  cgc: string;
  fantasy: string;
  cep: string;
  address: string;
  streetNumber: string;
  district: string;
  city: string;
  email: string;
  phone: string;
  observations: string;
  createDate: string;
}

export class CreateClientService {

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
  }: Request): Promise<Client> {
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

    //Salvar no banco de dados "Create não salva altomaticamente".
    await clientsRepository.save(client);
    return client;
  }
}
