import config from '@/config';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { UsersModule } from '@api/users/users.module';

import { JwtAuthService } from './jwt-auth.service';
import { JwtAuthStrategy } from './jwt-auth.strategy';

@Module({
  imports: [
    UsersModule,
    JwtModule.registerAsync({
      useFactory: async () => {
        return {
          secret: config.jwt.secret,
          signOptions: {
            expiresIn: config.jwt.expiresIn,
            algorithm: config.jwt.algorithm,
          },
        };
      },
    }),
  ],
  providers: [JwtAuthStrategy, JwtAuthService],
  exports: [JwtModule, JwtAuthService],
})
export class JwtAuthModule {}
