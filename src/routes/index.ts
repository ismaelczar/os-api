import { Router } from "express";
import { clientsRoute } from "./Clients.routes";


export const routes = Router();

routes.use('/clients', clientsRoute)
