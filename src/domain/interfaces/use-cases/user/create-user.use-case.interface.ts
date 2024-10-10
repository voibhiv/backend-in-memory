import { Request, Response } from "express";


export interface ICreateUserUseCase {
  execute(req: Request, res: Response): void;
}