import { DB } from "../../data/database/db";
import { CreateUserRequestModel } from "../models/user/create-user.model";
import { GetUserRequestModel } from "../models/user/get-user";
import users from "./../../data/database/content/user.json";
import { DocumentRepository } from "./document-repository";

export interface User {
  id: number;
  name: string;
  email: string;
}

export class UserRepository {
  private db: DB<User>;
  private documentRepository: DocumentRepository = new DocumentRepository();

  constructor() {
    this.db = new DB(users);
  }

  public getAll() {
    const allUsers = this.db.findAll();
    const userWithRelations = allUsers.map((user) => {
      const documentByUserId = this.documentRepository.getDocumentsByUserId(
        user.id
      );
      return {
        ...user,
        documents: documentByUserId ?? [],
      };
    });

    return userWithRelations;
  }

  public getOneBy(id: number) {
    const user = this.db.findById(id);
    if (user) {
      const documentByUserId = this.documentRepository.getDocumentsByUserId(
        user.id
      );

      return {
        ...user,
        documents: documentByUserId,
      };
    }
    return null;
  }

  public createUser(data: CreateUserRequestModel) {
    return this.db.insert(data);
  }

  public updateUser(id: number, data: CreateUserRequestModel) {
    return this.db.updateById(id, data);
  }

  public deleteUser(id: number) {
    return this.db.deleteById(id);
  }
}
