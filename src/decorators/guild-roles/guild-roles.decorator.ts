import { applyDecorators, SetMetadata } from '@nestjs/common';
import { GuildRoles as GuildRolesEnum } from '@prisma/client';

import { RequiresAuth } from '@/decorators/auth/auth.decorator';

export const GUILD_ROLES_KEY = 'roles';

export const RequireGuildRoles = (...guildRoles: GuildRolesEnum[]) =>
  applyDecorators(SetMetadata(GUILD_ROLES_KEY, guildRoles), RequiresAuth);
