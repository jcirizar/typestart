import {Request, Response} from 'express';
import {add, subtract} from "./calculations.model";

export function subtraction(req: Request, res: Response): Response {
  return res.json({
    result: subtract(+req.query.number1, +req.query.number2)
  });
}

export function addition(req: Request, res: Response): Response {
  return res.json({
    result: add(+req.query.number1, +req.query.number2)
  });
}
