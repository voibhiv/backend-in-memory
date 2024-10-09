import { Request, Response } from "express";

export interface IGetAllUsersUseCase {
  execute(req: Request, res: Response): void;
}