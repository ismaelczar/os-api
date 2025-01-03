/* eslint-disable @typescript-eslint/no-explicit-any */
import { Router } from 'express';
import { ClientsRepository } from '../repositories/Clients.repository';
import { CreateClientService } from '../services/CreateClientService';
import { getCustomRepository } from 'typeorm';

export const clientsRoute = Router();






clientsRoute.get('/', (req, res) => {
  //Instanciando Repositorio.
  const clientsRepository = getCustomRepository(ClientsRepository);
  const clients = clientsRepository.find();

  return res.json(clients) as any
});

clientsRoute.post('/', async (req, res) => {
  try {
    const clientData = req.body;

    //Instanciando service.
    const createClient = new CreateClientService();
    const client = await createClient.execute(clientData);

    return res.json(client) as any;
  } catch (error) {
    console.log(error);
  }
});

clientsRoute.put('/', (req, res) => {
  return res.json({ message: 'Alterando cadastros de clientes' }) as any;
});

clientsRoute.delete('/', (req, res) => {
  return res.json({ message: 'Removendo clientes' }) as any;
});
