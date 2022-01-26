import { GuildRoles } from '@prisma/client';
import { IsNotEmpty, IsNumber, IsEnum } from 'class-validator';

export class CreateGuildInviteDto {
  @IsNotEmpty()
  @IsNumber()
  guildId!: number;

  @IsEnum(GuildRoles)
  guildRole!: GuildRoles;
}
