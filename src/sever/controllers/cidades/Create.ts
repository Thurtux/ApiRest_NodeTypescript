import { Request, RequestHandler, Response, query } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import {validation} from '../../shared/middlewares';




const bodyValidation: yup.Schema<Icidade> = yup.object().shape({
  nome: yup.string().required().min(3),
  estado: yup.string().required().min(3),

});
//  


interface Icidade {
}

interface IFilter{
}

const queryValidation: yup.Schema<IFilter> = yup.object().shape({
  filter: yup.string().required().min(3),

});





export const createValidation = validation({
  body: yup.object().shape({
    nome: yup.string().required().min(3),
    estado: yup.string().required().min(3)}),

  query: yup.object().shape({
    filter: yup.string().required().min(3),}),
    
});








export const create : RequestHandler = async (req: Request<{}, {}, Icidade>, res:Response) => {
  console.log(req.body);

  return res.send('create');
};