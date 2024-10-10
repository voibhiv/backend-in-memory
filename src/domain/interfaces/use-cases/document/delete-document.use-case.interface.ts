import { Request, Response } from "express";

export interface IDeleteDocumentUseCase {
  execute(req: Request, res: Response): void;
}
