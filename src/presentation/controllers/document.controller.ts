import { CreateDocumentUseCase } from "../../domain/use-cases/document/document-create.use-case";
import { Request, Response } from "express";

export class DocumentController {
  private createDocumentUseCase: CreateDocumentUseCase;

  constructor() {
    this.createDocumentUseCase = new CreateDocumentUseCase();
  }

  public create(req: Request, res: Response) {
    return this.createDocumentUseCase.execute(req, res);
  }
}
