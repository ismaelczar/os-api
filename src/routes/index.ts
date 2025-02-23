import { Router } from "express";
import { clientsRoute } from "./Clients.routes";
import { usersRouter } from "./Users.routes";
import { sessionRouter } from "./Session.routes";

export const routes = Router();

routes.use('/clients', clientsRoute)
routes.use('/users', usersRouter)
routes.use('/sessions', sessionRouter)
