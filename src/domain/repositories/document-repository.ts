import { DB } from "../../data/database/db";
import { CreateDocumentRequestModel } from "../models/document/create-document";
import documents from "./../../data/database/content/documents.json";

export interface Document {
  id: number;
  name: string;
  status: string;
  userId: number;
}

export class DocumentRepository {
  private db: DB<Document>;

  constructor() {
    this.db = new DB(documents);
  }

  public createDocument(data: CreateDocumentRequestModel) {
    const { userId, ...rest } = data;
    const formattedData = {
      userId: Number(userId),
      ...rest,
    };
    return this.db.insert(formattedData);
  }

  public getAllDocuments() {
    return this.db.findAll();
  }
}
