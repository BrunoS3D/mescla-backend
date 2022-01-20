import { Injectable, CanActivate } from '@nestjs/common';
// import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
// import { User } from '@prisma/client';

// import { GuildRoles as GuildRolesEnum } from '@prisma/client';

// import { GUILD_ROLES_KEY } from './roles.decorator';

@Injectable()
export class GuildRolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(): boolean {
    // canActivate(context: ExecutionContext): boolean {
    // const requiredRoles = this.reflector.getAllAndOverride<GuildRolesEnum[]>(
    //   GUILD_ROLES_KEY,
    //   [context.getHandler(), context.getClass()],
    // );

    // if (!requiredRoles) {
    //   return true;
    // }

    // const { member } = context.switchToHttp().getRequest() as { user: User };

    // return requiredRoles.some((role) => user.role === role);
    return true;
  }
}
