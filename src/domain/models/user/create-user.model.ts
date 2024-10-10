import { User } from "../../repositories/user-repository";

export interface CreateUserRequestModel {
  id: number;
  name: string;
  email: string;
}

export interface CreateUserResponseModel extends User {}
