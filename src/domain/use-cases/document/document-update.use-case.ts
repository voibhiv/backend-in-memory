import { Request, Response } from "express";
import { IDocumentUpdateUseCase } from "../../interfaces/use-cases/document/update-document.use-case.interface";
import { DocumentRepository } from "../../repositories/document-repository";
import { UpdateDocumentRequestModel } from "../../models/document/update-document";

export class DocumentUpdateUseCase implements IDocumentUpdateUseCase {
  private documentRepository: DocumentRepository = new DocumentRepository();

  execute(req: Request, res: Response): void {
    try {
      const requestBody: Omit<UpdateDocumentRequestModel, "id" | "userId"> =
        req.body;
      const { id } = req.query;
      const documentUpdated = this.documentRepository.updateDocument(
        Number(id),
        requestBody
      );
      res.status(200).json(documentUpdated);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
