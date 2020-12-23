import { IsDefined, IsEmail } from 'class-validator';

export default class UserValidator {
  @IsDefined()
  firstName: string;

  @IsDefined()
  lastName: string;

  @IsDefined()
  @IsEmail()
  email: string;

  @IsDefined()
  password: string;
}