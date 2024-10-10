import { Request, Response } from "express";
import { ICreateDocumentUseCase } from "../../interfaces/use-cases/document/create-document.use-case.interface";
import { DocumentRepository } from "../../repositories/document-repository";
import { CreateDocumentRequestModel } from "../../models/document/create-document";

export class CreateDocumentUseCase implements ICreateDocumentUseCase {
  private documentRepository: DocumentRepository = new DocumentRepository();

  execute(req: Request, res: Response): void {
    try {
      const requestBody: CreateDocumentRequestModel = req.body;
      const document = this.documentRepository.createDocument(requestBody);
      res.status(201).json(document);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
