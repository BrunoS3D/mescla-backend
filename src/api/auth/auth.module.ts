import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { UsersModule } from '@api/users/users.module';
import { JwtAuthModule } from '@api/auth/strategies/jwt/jwt-auth.module';
import { GitHubAuthModule } from '@api/auth/strategies/github/github-auth.module';

@Module({
  imports: [UsersModule, PassportModule, JwtAuthModule, GitHubAuthModule],
})
export class AuthModule {}
