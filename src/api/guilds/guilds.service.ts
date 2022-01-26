import { Injectable } from '@nestjs/common';
import { validateOrReject } from 'class-validator';
import { Guild, GuildRoles, User } from '@prisma/client';

import { PrismaService } from '@/prisma/prisma.service';

import type { Cursor, Paginate } from '@/types';

import { GuildInvitesService } from '@api/guild-invites/guild-invites.service';
import { GuildMembersService } from '@api/guild-members/guild-members.service';

import { CreateGuildDto } from './dto/create-guild.dto';
import { UpdateGuildDto } from './dto/update-guild.dto';

@Injectable()
export class GuildsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly guildInvites: GuildInvitesService,
    private readonly guildMembers: GuildMembersService,
  ) {}

  async create({
    user,
    createGuildDto,
  }: {
    user: User;
    createGuildDto: CreateGuildDto;
  }): Promise<Guild> {
    await validateOrReject(createGuildDto);

    const guild = await this.prisma.guild.create({ data: createGuildDto });

    // create first manager
    await this.guildMembers.create({
      guildId: guild.id,
      userId: user.id,
      guildRole: GuildRoles.manager,
    });

    // create manger invite
    await this.guildInvites.create({
      guildId: guild.id,
      guildRole: GuildRoles.manager,
    });

    // create mentor invite
    await this.guildInvites.create({
      guildId: guild.id,
      guildRole: GuildRoles.mentor,
    });

    // create participant invite
    await this.guildInvites.create({
      guildId: guild.id,
      guildRole: GuildRoles.participant,
    });

    return guild;
  }

  async checkSlugAvailability(slug: string): Promise<{ available: boolean }> {
    return {
      available: !(await this.prisma.guild.findFirst({ where: { slug } })),
    };
  }

  async findAll({ page = 0, limit = 10 }: Cursor): Promise<Paginate<Guild>> {
    const total = await this.prisma.guild.count();

    return {
      page,
      limit,
      pageCount: Math.ceil(total / limit),
      data: await this.prisma.guild.findMany({
        skip: page * limit,
        take: limit,
      }),
    };
  }

  async findOne(guildId: number): Promise<Guild | null> {
    return await this.prisma.guild.findUnique({ where: { id: guildId } });
  }

  async findOneBySlug(slug: string): Promise<Guild | null> {
    return await this.prisma.guild.findUnique({ where: { slug } });
  }

  update(id: number, updateGuildDto: UpdateGuildDto) {
    return `This action updates a #${id} guild`;
  }

  remove(id: number) {
    return `This action removes a #${id} guild`;
  }
}
