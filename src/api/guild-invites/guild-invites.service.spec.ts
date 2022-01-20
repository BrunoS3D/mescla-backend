import { Test, TestingModule } from '@nestjs/testing';
import { GuildInvitesService } from './guild-invites.service';

describe('GuildInvitesService', () => {
  let service: GuildInvitesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GuildInvitesService],
    }).compile();

    service = module.get<GuildInvitesService>(GuildInvitesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
