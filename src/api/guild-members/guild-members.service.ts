import { Injectable } from '@nestjs/common';
import { CreateGuildMemberDto } from './dto/create-guild-member.dto';
import { UpdateGuildMemberDto } from './dto/update-guild-member.dto';

@Injectable()
export class GuildMembersService {
  create(createGuildMemberDto: CreateGuildMemberDto) {
    return 'This action adds a new guildMember';
  }

  findAll() {
    return `This action returns all guildMembers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} guildMember`;
  }

  update(id: number, updateGuildMemberDto: UpdateGuildMemberDto) {
    return `This action updates a #${id} guildMember`;
  }

  remove(id: number) {
    return `This action removes a #${id} guildMember`;
  }
}
