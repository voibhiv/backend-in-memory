import { GetAllUsersUseCase } from "../../domain/use-cases/user/get-all-users.use-case";
import { Request, Response } from "express";

export class UserController {
  private getAllUsersUseCase: GetAllUsersUseCase;

  constructor() {
    this.getAllUsersUseCase = new GetAllUsersUseCase();
  }

  public getAll(req: Request, res: Response) {
    return this.getAllUsersUseCase.execute(req, res);
  }
}
