import { CreateDocumentUseCase } from "../../domain/use-cases/document/document-create.use-case";
import { Request, Response } from "express";
import { GetAllDocumentUseCase } from "../../domain/use-cases/document/document-get-all.use-case";

export class DocumentController {
  private createDocumentUseCase: CreateDocumentUseCase;
  private getAllDocumentUseCase: GetAllDocumentUseCase;

  constructor() {
    this.createDocumentUseCase = new CreateDocumentUseCase();
    this.getAllDocumentUseCase = new GetAllDocumentUseCase();
  }

  public create(req: Request, res: Response) {
    return this.createDocumentUseCase.execute(req, res);
  }

  public readAll(req: Request, res: Response) {
    return this.getAllDocumentUseCase.execute(req, res);
  }
}
