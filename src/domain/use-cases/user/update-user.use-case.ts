import { Request, Response } from "express";
import { IUpdateUserUseCase } from "../../interfaces/use-cases/update-user.interface";
import { CreateUserRequestModel } from "../../models/user/create-user.model";
import { UserRepository } from "../../repositories/user-repository";

export class UpdateUserUseCase implements IUpdateUserUseCase {
  private userRepository: UserRepository = new UserRepository();

  execute(req: Request, res: Response): void {
    try {
      const requestBody: Omit<CreateUserRequestModel, "id"> = req.body;
      const { id } = req.query;
      const userUpdated = this.userRepository.updateUser(
        Number(id),
        requestBody
      );

      res.status(200).json(userUpdated);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
