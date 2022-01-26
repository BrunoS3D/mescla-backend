import { Injectable } from '@nestjs/common';
import { validateOrReject } from 'class-validator';
import type { GuildInvite } from '@prisma/client';

import { PrismaService } from '@/prisma/prisma.service';

import { CreateGuildInviteDto } from './dto/create-guild-invite.dto';
// import { UpdateGuildInviteDto } from './dto/update-guild-invite.dto';

@Injectable()
export class GuildInvitesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createGuildInviteDto: CreateGuildInviteDto,
  ): Promise<GuildInvite> {
    await validateOrReject(createGuildInviteDto);
    return await this.prisma.guildInvite.create({ data: createGuildInviteDto });
  }

  async findAll(guildId: number): Promise<GuildInvite[]> {
    return await this.prisma.guildInvite.findMany({ where: { guildId } });
  }

  async findOneByCode(code: string): Promise<GuildInvite | null> {
    return this.prisma.guildInvite.findUnique({
      where: {
        code,
      },
    });
  }

  // update(id: number, updateGuildInviteDto: UpdateGuildInviteDto) {
  //   return `This action updates a #${id} guildInvite`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} guildInvite`;
  // }
}
