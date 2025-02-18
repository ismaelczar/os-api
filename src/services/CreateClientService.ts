import { getCustomRepository } from 'typeorm';

import { ClientsRepository } from '../repositories/Clients.repository';
import { Client } from '../entity/Clients';

interface Request {
  company_name: string;
  cgc: string;
  company_fantasy: string;
  postal_code: string;
  street: string;
  street_number: string;
  neighborhood: string;
  city: string;
  email: string;
  phone_number: string;
  notes: string;
}

export class CreateClientService {

  public async execute({
    company_name,
    cgc,
    company_fantasy,
    postal_code,
    street,
    street_number,
    neighborhood,
    city,
    email,
    notes,
    phone_number,
  }: Request): Promise<Client> {
    const clientsRepository = getCustomRepository(ClientsRepository);

    const existingClient = await clientsRepository.findByCgc(cgc);

    if (existingClient) {
      throw Error('Client with this CGC already exists.')
    }

    const totalClients = await clientsRepository.count()
    const newCode = String(totalClients + 1).padStart(5, '0')

    const client = clientsRepository.create({
      company_name,
      cgc,
      code: newCode,
      company_fantasy,
      postal_code,
      street,
      street_number,
      neighborhood,
      city,
      email,
      notes,
      phone_number,
    });

    //Salvar no banco de dados "Create não salva altomaticamente".
    await clientsRepository.save(client);
    return client;
  }
}
