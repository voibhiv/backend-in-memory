import { CreateDocumentRequestModel } from "./create-document";

export interface UpdateDocumentRequestModel extends CreateDocumentRequestModel {
  id: number;
}
