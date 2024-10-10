import { Request, Response } from "express";

export interface IDocumentUpdateUseCase {
  execute(req: Request, res: Response): void;
}