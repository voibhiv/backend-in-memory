import { Request, Response } from "express";
import { DocumentRepository } from "../../repositories/document-repository";
import { IGetAllDocumentUseCase } from "../../interfaces/use-cases/document/get-all-document.use-case.interface";

export class GetAllDocumentUseCase implements IGetAllDocumentUseCase {
  private documentRepository: DocumentRepository = new DocumentRepository();

  execute(req: Request, res: Response): void {
    try {
      const allDocuments = this.documentRepository.getAllDocuments();
      res.status(200).json(allDocuments);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
