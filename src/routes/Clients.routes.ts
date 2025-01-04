/* eslint-disable @typescript-eslint/no-explicit-any */
import { Router } from 'express';
import { ClientsRepository } from '../repositories/Clients.repository';
import { CreateClientService } from '../services/CreateClientService';
import { getCustomRepository } from 'typeorm';

export const clientsRoute = Router();

// GET: Retornar todos os clientes.
clientsRoute.get('/', async (_req, res): Promise<any> => {
  try {
    const clientsRepository = getCustomRepository(ClientsRepository)
    const clients = await clientsRepository.find()

    return res.status(200).json(clients)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error fetching clients' })
  }
});

// POST: Cria um novo cliente.
clientsRoute.post('/', async (req, res): Promise<any> => {
  try {
    const clientData = req.body;
    const createClient = new CreateClientService();
    const client = await createClient.execute(clientData);

    return res.status(201).json(client)
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error.message });
  }
});

clientsRoute.put('/', (_req, res): Promise<any> => {
  return res.json({ message: 'Alterando cadastros de clientes' })
});

clientsRoute.delete('/', (_req, res): Promise<any> => {
  return res.json({ message: 'Removendo clientes' })
});
