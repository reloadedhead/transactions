import { IsDefined, IsNumber } from "class-validator";

export class TransactionValidator {
  @IsDefined()
  @IsNumber()
  amount: number;

  @IsDefined()
  description: string;

  @IsDefined()
  type: string;
}

export class UpdateTransactionValidator {
  @IsDefined()
  @IsNumber()
  amount: number;

  @IsDefined()
  description: string;
}