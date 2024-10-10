import { Request, Response } from "express";
import { IDeleteDocumentUseCase } from "../../interfaces/use-cases/document/delete-document.use-case.interface";
import { DocumentRepository } from "../../repositories/document-repository";

export class DocumentDeleteUseCase implements IDeleteDocumentUseCase {
  private documentRepository: DocumentRepository = new DocumentRepository();

  execute(req: Request, res: Response): void {
    try {
      const { id } = req.params;
      const documentDeleted = this.documentRepository.deleteDocument(
        Number(id)
      );
      res.status(200).send(documentDeleted);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
