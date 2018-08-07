import {Request, Response} from 'express';
import {add} from "./calculations.model";

export function addition(req: Request, res: Response): Response {
    return res.json({
        result: add(+req.query.number1, +req.query.number2)
    });
};