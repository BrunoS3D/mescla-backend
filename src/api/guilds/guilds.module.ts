import { Module } from '@nestjs/common';

import { PrismaModule } from '@/prisma/prisma.module';

import { GuildInvitesModule } from '@api/guild-invites/guild-invites.module';
import { GuildMembersModule } from '@api/guild-members/guild-members.module';

import { GuildsService } from './guilds.service';
import { GuildsController } from './guilds.controller';

@Module({
  imports: [PrismaModule, GuildInvitesModule, GuildMembersModule],
  controllers: [GuildsController],
  providers: [GuildsService],
})
export class GuildsModule {}
