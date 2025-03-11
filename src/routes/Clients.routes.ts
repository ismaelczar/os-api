import express, { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';

import { ClientsRepository } from '../repositories/Clients.repository';
import { CreateClientService } from '../services/CreateClientService';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { clientSchema } from '../schemas/clientSchema';

export const clientsRoute = express.Router();
clientsRoute.use(ensureAuthenticated)

clientsRoute.get('/', async (req: Request, res: Response): Promise<any> => {
  const clientsRepository = getCustomRepository(ClientsRepository);
  const clients = await clientsRepository.find();

  return res.status(200).json(clients);
});

clientsRoute.post('/', async (req, res): Promise<any> => {
  const { error, value } = clientSchema.validate(req.body)

  if (error) {
    return res.status(400).json({ error: error.details[0].message })
  }
  const createClient = new CreateClientService();
  const client = await createClient.execute(value);

  return res.status(201).json(client)
});

//TODO: ADICIONAR ATUALIZAÇÃO DE CADASTRO DE CLIENTES.
clientsRoute.put('/:id', (req: Request, res: Response): Promise<any> => {
  const { id } = req.params
  return res.json({ message: 'Alterando cadastros de clientes' })
});

//TODO: ADICIONAR ROTA DE DELETAR CLIENTES.
clientsRoute.delete('/:id', (req, res): Promise<any> => {
  return res.json({ message: 'Removendo clientes' })
});
