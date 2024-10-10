import { DB } from "../../data/database/db";
import { CreateUserRequestModel } from "../models/user/create-user.model";
import users from "./../../data/database/content/user.json";

export interface User {
  id: string;
  name: string;
  email: string;
}

export class UserRepository {
  private db: DB<User>;

  constructor() {
    this.db = new DB(users);
  }

  public getAll() {
    return this.db.findAll();
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
