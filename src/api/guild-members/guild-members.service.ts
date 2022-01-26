import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import type { GuildMember } from '@prisma/client';

import { CreateGuildMemberDto } from './dto/create-guild-member.dto';
// import { UpdateGuildMemberDto } from './dto/update-guild-member.dto';

@Injectable()
export class GuildMembersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createGuildMemberDto: CreateGuildMemberDto,
  ): Promise<GuildMember> {
    return await this.prisma.guildMember.create({ data: createGuildMemberDto });
  }

  // findAll() {
  //   return `This action returns all guildMembers`;
  // }

  async findOne(guildId: number, userId: number): Promise<GuildMember | null> {
    return await this.prisma.guildMember.findFirst({
      where: { guildId, userId },
    });
  }

  // update(id: number, updateGuildMemberDto: UpdateGuildMemberDto) {
  //   return `This action updates a #${id} guildMember`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} guildMember`;
  // }
}
