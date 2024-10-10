import { Request, Response } from "express";
import { CreateUserResponseModel } from "../../models/user/create-user.model";


export interface ICreateUserUseCase {
  execute(req: Request, res: Response): void;
}