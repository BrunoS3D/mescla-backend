import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { CampaignsModule } from './campaigns/campaigns.module';
import { UsersModule } from './users/users.module';

import { ApiController } from './api.controller';
import { UserCampaignsModule } from './user-campaigns/user-campaigns.module';
import { EventsModule } from './events/events.module';

@Module({
  imports: [
    AuthModule,
    CampaignsModule,
    UsersModule,
    UserCampaignsModule,
    EventsModule,
  ],
  controllers: [ApiController],
})
export class ApiModule {}
