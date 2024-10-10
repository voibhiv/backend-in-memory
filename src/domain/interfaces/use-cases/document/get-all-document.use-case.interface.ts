import { Request, Response } from "express";

export interface IGetAllDocumentUseCase {
  execute(req: Request, res: Response): void;
}