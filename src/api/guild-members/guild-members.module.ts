import { Module } from '@nestjs/common';
import { PrismaModule } from '@/prisma/prisma.module';

import { GuildMembersService } from './guild-members.service';
import { GuildMembersController } from './guild-members.controller';

@Module({
  imports: [PrismaModule],
  controllers: [GuildMembersController],
  providers: [GuildMembersService],
  exports: [GuildMembersService],
})
export class GuildMembersModule {}
