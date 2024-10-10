import { IGetAllUsersUseCase } from "../../interfaces/use-cases/get-all-users.use-case.interface";
import { Request, Response } from "express";
import { UserRepository } from "../../repositories/user-repository";

export class GetAllUsersUseCase implements IGetAllUsersUseCase {
  private userRepository: UserRepository = new UserRepository();

  constructor() {}

  execute(req: Request, res: Response): void {
    try {
      const users = this.userRepository.getAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
