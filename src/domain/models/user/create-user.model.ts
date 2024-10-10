import { User } from "../../repositories/user-repository";

export interface CreateUserRequestModel {
  name: string;
  email: string;
}

export interface CreateUserResponseModel extends User {}
