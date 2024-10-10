import { CreateDocumentUseCase } from "../../domain/use-cases/document/document-create.use-case";
import { Request, Response } from "express";
import { GetAllDocumentUseCase } from "../../domain/use-cases/document/document-get-all.use-case";
import { DocumentUpdateUseCase } from "../../domain/use-cases/document/document-update.use-case";
import { DocumentDeleteUseCase } from "../../domain/use-cases/document/document-delete.use-case";

export class DocumentController {
  private createDocumentUseCase: CreateDocumentUseCase;
  private getAllDocumentUseCase: GetAllDocumentUseCase;
  private documentUpdateUseCase: DocumentUpdateUseCase;
  private documentDeleteUseCase: DocumentDeleteUseCase;

  constructor() {
    this.createDocumentUseCase = new CreateDocumentUseCase();
    this.getAllDocumentUseCase = new GetAllDocumentUseCase();
    this.documentUpdateUseCase = new DocumentUpdateUseCase();
    this.documentDeleteUseCase = new DocumentDeleteUseCase();
  }

  public create(req: Request, res: Response) {
    return this.createDocumentUseCase.execute(req, res);
  }

  public readAll(req: Request, res: Response) {
    return this.getAllDocumentUseCase.execute(req, res);
  }

  public update(req: Request, res: Response) {
    return this.documentUpdateUseCase.execute(req, res);
  }

  public delete(req: Request, res: Response) {
    return this.documentDeleteUseCase.execute(req, res);
  }
}
