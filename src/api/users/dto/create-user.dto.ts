import { AuthProviders } from '@prisma/client';
import {
  IsEmail,
  IsNotEmpty,
  MinLength,
  IsOptional,
  IsEnum,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  username!: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  displayName?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsNotEmpty()
  @MinLength(8)
  @IsString()
  password?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  avatarUrl?: string;

  @IsEnum(AuthProviders)
  authProvider!: AuthProviders;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  thirdPartyId?: string;
}
