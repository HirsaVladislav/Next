import { ObjectID } from "typeorm";

export class CreateUserDto {
  id?: ObjectID;
  firstName: string;
  lastName: string;
  age?: number;
}