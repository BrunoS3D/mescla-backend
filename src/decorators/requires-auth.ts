import { applyDecorators, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiUnauthorizedResponse } from '@nestjs/swagger';

import { GuildRolesGuard } from '@/api/guild-roles/guild-roles.guard';
import { JwtAuthGuard } from '@/api/auth/strategies/jwt/jwt-auth.guard';

export const RequiresAuth = () =>
  applyDecorators(
    UseGuards(JwtAuthGuard, GuildRolesGuard),
    ApiBearerAuth(),
    ApiUnauthorizedResponse({ description: `Invalid or expired user token` }),
  );
