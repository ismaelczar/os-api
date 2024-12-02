import { Router } from "express";
import { ClientsRoute } from "./Clients.routes";

export const routes = Router();

routes.use('/clients', ClientsRoute)