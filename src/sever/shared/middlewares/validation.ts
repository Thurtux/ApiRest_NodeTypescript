import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Schema, ValidationError, object, string } from 'yup';


type TProperty =  'body' | 'header' | 'params' | 'query';

type TAllSchemas = Record<TProperty, Schema<any>>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TValidation = (schemas: Partial<TAllSchemas>) => RequestHandler;

export const validation: TValidation  = (schemas) => async (req, res, next) => {

  console.log(schemas);

  const errorsResult: Record<string, Record<string, string>> = {};
  
  Object.entries(schemas).forEach(([key, schema]) => {
    try{
      schema.validateSync(req[key as TProperty], {abortEarly: false});
      /*return next();*/
    } catch(error){
      const yupError = error as ValidationError;
      const validationErrors: Record<string, string> = {};
  
  
      yupError.inner.forEach(error=> {
         
        if (error.path === undefined) return;
        validationErrors[error.path] = error.message;
      });
      errorsResult[key] = erros;
  
      
    }
  });

  if (Object.entries(errorsResult).length == 0) {
    return next();
  }else {
    return res.status(StatusCodes.BAD_REQUEST).json({errors: errorsResult,});
  }
  /*return next();*/
  /*return res.status(StatusCodes.BAD_REQUEST).json({errors: validationErrors,});*/
};

   
