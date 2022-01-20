import { Module } from '@nestjs/common';

import { UsersModule } from '@api/users/users.module';
import { JwtAuthModule } from '@api/auth/strategies/jwt/jwt-auth.module';
import { GitHubStrategy } from '@api/auth/strategies/github/github.strategy';
import { GitHubAuthController } from '@api/auth/strategies/github/github-auth.controller';

@Module({
  imports: [UsersModule, JwtAuthModule],
  controllers: [GitHubAuthController],
  providers: [GitHubStrategy],
})
export class GitHubAuthModule {}
