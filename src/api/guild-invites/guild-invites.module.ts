import { Module } from '@nestjs/common';

import { PrismaModule } from '@/prisma/prisma.module';

import { GuildInvitesService } from './guild-invites.service';
import { GuildInvitesController } from './guild-invites.controller';

@Module({
  imports: [PrismaModule],
  controllers: [GuildInvitesController],
  providers: [GuildInvitesService],
  exports: [GuildInvitesService],
})
export class GuildInvitesModule {}
