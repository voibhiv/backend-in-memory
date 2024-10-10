export interface CreateDocumentRequestModel {
  name: string;
  status: string;
  userId: number;
}

export interface CreateDocumentResponseModel extends Document {}
