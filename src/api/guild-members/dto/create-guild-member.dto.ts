import { GuildRoles } from '@prisma/client';
import { IsNotEmpty, IsNumber, IsEnum } from 'class-validator';

export class CreateGuildMemberDto {
  @IsNotEmpty()
  @IsNumber()
  userId!: number;

  @IsNotEmpty()
  @IsNumber()
  guildId!: number;

  @IsNotEmpty()
  @IsEnum(GuildRoles)
  guildRole!: GuildRoles;
}
