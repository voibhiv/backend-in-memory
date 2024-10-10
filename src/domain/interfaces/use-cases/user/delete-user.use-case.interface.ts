import { Request, Response } from "express";

export interface IDeleteUserUseCase {
  execute(req: Request, res: Response): void;
}
