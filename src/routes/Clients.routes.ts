/* eslint-disable @typescript-eslint/no-explicit-any */
import { Router } from 'express';
import { ClientsRepository } from '../repositories/Clients.repository';
import { CreateClient } from '../services/CreateClient';

export const ClientsRoute = Router();

const clientsRepository = new ClientsRepository();
const createClient = new CreateClient(clientsRepository);

ClientsRoute.get('/', (req, res) => {
  const clients = clientsRepository.findAll();

  return res.json(clients) as any;
});

ClientsRoute.post('/', (req, res) => {
  try {
    const clientData = req.body;

    const client = createClient.execute(clientData);

    return res.json(client) as any;
  } catch (error) {
    console.log(error);
  }
});

ClientsRoute.put('/', (req, res) => {
  return res.json({ message: 'Alterando cadastros de clientes' }) as any;
});

ClientsRoute.delete('/', (req, res) => {
  return res.json({ message: 'Removendo clientes' }) as any;
});
