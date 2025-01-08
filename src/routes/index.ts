import { Router } from "express";
import { clientsRoute } from "./Clients.routes";
import { usersRouter } from "./Users.routes";


export const routes = Router();

routes.use('/clients', clientsRoute)
routes.use('/users', usersRouter)
