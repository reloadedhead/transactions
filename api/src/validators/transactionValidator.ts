import { IsDefined, IsNumber } from "class-validator";

export default class TransactionValidator {
  @IsDefined()
  @IsNumber()
  amount: number;

  @IsDefined()
  description: string;

  @IsDefined()
  type: string;
}