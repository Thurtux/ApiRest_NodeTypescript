import { Router} from 'express';
import { StatusCodes } from 'http-status-codes';
const router = Router();

import { CidadesController } from './../controllers';
CidadesController.create;

//rotas
router.post('/cidades',
  CidadesController.createValidation,
  CidadesController.create
);



export {router};

