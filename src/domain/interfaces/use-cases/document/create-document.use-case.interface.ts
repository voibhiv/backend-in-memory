import { Request, Response } from "express";

export interface ICreateDocumentUseCase {
  execute(req: Request, res: Response): void;
}
