import { Router } from "express";
import { clientsRoute } from "./clients.routes";
import { usersRouter } from "./users.routes";
import { sessionRouter } from "./session.route";

export const routes = Router();

routes.use('/clients', clientsRoute)
routes.use('/users', usersRouter)
routes.use('/sessions', sessionRouter)
