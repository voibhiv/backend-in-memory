import { Request, Response } from "express";
import { IDeleteUserUseCase } from "../../interfaces/use-cases/delete-user.use-case.interface";
import { UserRepository } from "../../repositories/user-repository";

export class DeleteUserUseCase implements IDeleteUserUseCase {
  private userRepository: UserRepository = new UserRepository();

  execute(req: Request, res: Response): void {
    try {
      const { id } = req.params;
      const userDeleted = this.userRepository.deleteUser(Number(id));
      res.status(200).send(userDeleted);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
