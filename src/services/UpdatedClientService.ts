import { getRepository } from "typeorm";
import { Client } from "../entity/Clients";
import { parseISO } from "date-fns";

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

export class UpdatedClientService {

  public async execute({
    id,
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
    updated_at, }: Request) {

    const clientsRepository = getRepository(Client)
    const recordCreationDate = new Date();
    const parsedDate = parseISO(created_at);

    const client = await clientsRepository.findOne({ where: id })

    if (!client) {
      throw new Error('Client not exist')
    }

    client.company_name = company_name;
    // client.code = code;
    client.cgc = cgc;
    client.company_fantasy = company_fantasy;
    client.postal_code = postal_code;
    client.street = street;
    client.street_number = street_number;
    client.neighborhood = neighborhood;
    client.city = city;
    client.email = email;
    client.notes = notes;
    client.phone_number = phone_number;
    // client.created_at = created_at;
    client.updated_at = recordCreationDate;

    await clientsRepository.save(client)
  }
}
