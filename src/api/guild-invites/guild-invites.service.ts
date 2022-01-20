import { Injectable } from '@nestjs/common';
import { CreateGuildInviteDto } from './dto/create-guild-invite.dto';
import { UpdateGuildInviteDto } from './dto/update-guild-invite.dto';

@Injectable()
export class GuildInvitesService {
  create(createGuildInviteDto: CreateGuildInviteDto) {
    return 'This action adds a new guildInvite';
  }

  findAll() {
    return `This action returns all guildInvites`;
  }

  findOne(id: number) {
    return `This action returns a #${id} guildInvite`;
  }

  update(id: number, updateGuildInviteDto: UpdateGuildInviteDto) {
    return `This action updates a #${id} guildInvite`;
  }

  remove(id: number) {
    return `This action removes a #${id} guildInvite`;
  }
}
