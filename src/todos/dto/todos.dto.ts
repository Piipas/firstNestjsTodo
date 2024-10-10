import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsString({ message: 'Not a valid content' })
  @IsNotEmpty({ message: "Content can't be empty" })
  content: string;
}
