import { Request, Response } from "express";

export interface IGetOneUserUseCase {
  execute(req: Request, res: Response): void;
}
