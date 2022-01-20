import { Module } from '@nestjs/common';

import { ApiModule } from '@/api/api.module';
import { GuildInvitesModule } from './api/guild-invites/guild-invites.module';
import { GuildMembersModule } from './api/guild-members/guild-members.module';
import { GuildsModule } from './api/guilds/guilds.module';

@Module({
  imports: [ApiModule, GuildInvitesModule, GuildMembersModule, GuildsModule],
})
export class ServerModule {}
