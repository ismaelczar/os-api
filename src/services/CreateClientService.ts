import { parseISO } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import { ClientsRepository } from '../repositories/Clients.repository';
import { Client } from '../entity/Clients';

interface Request {
  id: string;
  code: string;
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
  created_at: string;
  updated_at: string
}

export class CreateClientService {

  public async execute({
    company_name,
    code,
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
    created_at,
    updated_at,
  }: Request): Promise<Client> {
    const clientsRepository = getCustomRepository(ClientsRepository);
    const parsedDate = parseISO(created_at);
    const recordCreationDate = new Date().toISOString();
    const existingClient = await clientsRepository.findByCgc(cgc);

    if (existingClient) {
      throw Error('Client with this CGC already exists.')
    }

    const client = clientsRepository.create({
      company_name,
      cgc,
      code,
      company_fantasy,
      postal_code,
      street,
      street_number,
      neighborhood,
      city,
      email,
      notes,
      phone_number,
      created_at: created_at ? parsedDate : recordCreationDate,
      updated_at: updated_at ? parsedDate : recordCreationDate
    });

    //Salvar no banco de dados "Create não salva altomaticamente".
    await clientsRepository.save(client);
    return client;
  }
}
