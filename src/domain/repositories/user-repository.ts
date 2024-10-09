import { DB } from "../../data/database/db";
import users from './../../data/database/content/user.json';

interface User {
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


}