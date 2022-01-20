import { SetMetadata } from '@nestjs/common';
import { GuildRoles as GuildRolesEnum } from '@prisma/client';

export const GUILD_ROLES_KEY = 'roles';

export const GuildRoles = (...guildRoles: GuildRolesEnum[]) =>
  SetMetadata(GUILD_ROLES_KEY, guildRoles);
