import { Repository } from 'typeorm';

import { Client } from '../entity/Clients';

export class ClientsRepository extends Repository<Client> {
  public async findByDate(date: Date): Promise<Client | null> {
    const findClient = await this.findOne({
      where: { createDate: date },
    });

    return findClient || null;
  }
}
