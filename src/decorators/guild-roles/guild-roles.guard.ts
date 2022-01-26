import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Inject,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { User } from '@prisma/client';
import { GuildRoles as GuildRolesEnum } from '@prisma/client';

import { GuildMembersService } from '@api/guild-members/guild-members.service';
import { GUILD_ROLES_KEY } from './guild-roles.decorator';

@Injectable()
export class GuildRolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    @Inject('GuildMembersService')
    private readonly guildMember: GuildMembersService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<GuildRolesEnum[]>(
      GUILD_ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const { user } = request as { user: User };
    const { guildId } = request.params as { guildId: string };

    const guildMember = await this.guildMember.findOne(+guildId, user.id);

    if (!guildMember) throw new ForbiddenException();

    return requiredRoles.some((gr) => guildMember.guildRole === gr);
  }
}
