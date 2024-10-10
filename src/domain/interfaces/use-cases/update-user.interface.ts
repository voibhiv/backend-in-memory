import { Request, Response } from "express";

export interface IUpdateUserUseCase {
  execute(req: Request, res: Response): void;
}
