import { Repository, EntityRepository } from 'typeorm';

import { Client } from '../entity/Clients';

//TODO: ADICIONAR MAIS MODOS DE BUSCA.
@EntityRepository(Client)
export class ClientsRepository extends Repository<Client> {
  public async findByCgc(cgc: string): Promise<Client | null> {
    const findClient = await this.findOne({
      where: { cgc: cgc },
    });

    return findClient || null;
  }
}
