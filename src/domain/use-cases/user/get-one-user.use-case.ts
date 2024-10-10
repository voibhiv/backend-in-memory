import { Request, Response } from "express";
import { UserRepository } from "../../repositories/user-repository";
import { IGetOneUserUseCase } from "../../interfaces/use-cases/user/get-one-user.use-case.interface";

export class GetOneUserUseCase implements IGetOneUserUseCase {
  private userRepository: UserRepository = new UserRepository();

  constructor() {}

  execute(req: Request, res: Response): void {
    try {
      const { id } = req.query;
      const user = this.userRepository.getOneBy(Number(id));
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
