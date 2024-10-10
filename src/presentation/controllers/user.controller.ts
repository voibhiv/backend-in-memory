import { CreateUserUseCase } from "../../domain/use-cases/user/create-user.use-case";
import { GetAllUsersUseCase } from "../../domain/use-cases/user/get-all-users.use-case";
import { Request, Response } from "express";
import { UpdateUserUseCase } from "../../domain/use-cases/user/update-user.use-case";

export class UserController {
  private getAllUsersUseCase: GetAllUsersUseCase;
  private createUserUseCase: CreateUserUseCase;
  private updateUserUseCase: UpdateUserUseCase;

  constructor() {
    this.getAllUsersUseCase = new GetAllUsersUseCase();
    this.createUserUseCase = new CreateUserUseCase();
    this.updateUserUseCase = new UpdateUserUseCase();
  }

  public getAll(req: Request, res: Response) {
    return this.getAllUsersUseCase.execute(req, res);
  }

  public create(req: Request, res: Response) {
    return this.createUserUseCase.execute(req, res);
  }

  public update(req: Request, res: Response) {
    return this.updateUserUseCase.execute(req, res);
  }
}
