import { CreateUserUseCase } from "../../domain/use-cases/user/create-user.use-case";
import { GetAllUsersUseCase } from "../../domain/use-cases/user/get-all-users.use-case";
import { Request, Response } from "express";

export class UserController {
  private getAllUsersUseCase: GetAllUsersUseCase;
  private createUserUseCase: CreateUserUseCase;
  constructor() {
    this.getAllUsersUseCase = new GetAllUsersUseCase();
    this.createUserUseCase = new CreateUserUseCase();
  }

  public getAll(req: Request, res: Response) {
    return this.getAllUsersUseCase.execute(req, res);
  }

  public create(req: Request, res: Response) {
    return this.createUserUseCase.execute(req, res);
  }
}
