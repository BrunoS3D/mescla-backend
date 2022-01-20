import { Test, TestingModule } from '@nestjs/testing';
import { GuildInvitesController } from './guild-invites.controller';
import { GuildInvitesService } from './guild-invites.service';

describe('GuildInvitesController', () => {
  let controller: GuildInvitesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GuildInvitesController],
      providers: [GuildInvitesService],
    }).compile();

    controller = module.get<GuildInvitesController>(GuildInvitesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
