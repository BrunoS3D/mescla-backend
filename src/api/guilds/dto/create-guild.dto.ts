import { IsNotEmpty, MaxLength, IsString } from 'class-validator';

export class CreateGuildDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(28)
  slug!: string;

  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  description!: string;
}
