import { Module } from '@nestjs/common';

import { PrismaModule } from '@/prisma/prisma.module';
import { PasswordModule } from '@api/password/password.module';

import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [PasswordModule, PrismaModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
