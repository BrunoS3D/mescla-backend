import { Module } from '@nestjs/common';
import { GuildInvitesService } from './guild-invites.service';
import { GuildInvitesController } from './guild-invites.controller';

@Module({
  controllers: [GuildInvitesController],
  providers: [GuildInvitesService],
})
export class GuildInvitesModule {}
