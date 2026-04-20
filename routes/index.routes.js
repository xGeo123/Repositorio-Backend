import ejemplo from './ejemplo.routes.js';

import { Router } from 'express';

const indexRoutes = Router();

// Routes for local API
indexRoutes.use('/ejemplo', ejemplo);


export default indexRoutes;
