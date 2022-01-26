import { Global, Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { GuildInvitesModule } from './guild-invites/guild-invites.module';
import { GuildMembersModule } from './guild-members/guild-members.module';
import { GuildsModule } from './guilds/guilds.module';

import { ApiController } from './api.controller';

@Global()
@Module({
  imports: [
    AuthModule,
    UsersModule,
    GuildsModule,
    GuildMembersModule,
    GuildInvitesModule,
  ],
  controllers: [ApiController],
})
export class ApiModule {}
