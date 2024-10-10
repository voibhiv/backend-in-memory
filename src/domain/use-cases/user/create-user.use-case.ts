import { ICreateUserUseCase } from "../../interfaces/use-cases/user/create-user.use-case.interface";
import {
  CreateUserRequestModel,
} from "../../models/user/create-user.model";
import { UserRepository } from "../../repositories/user-repository";
import { Request, Response } from "express";

export class CreateUserUseCase implements ICreateUserUseCase {
  private userRepository: UserRepository = new UserRepository();

  execute(req: Request, res: Response): void {
    try {
      const requestBody: CreateUserRequestModel = req.body;
      const user = this.userRepository.createUser(requestBody);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
