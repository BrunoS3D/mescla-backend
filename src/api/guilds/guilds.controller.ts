import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor,
  NotFoundException,
  Query,
} from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import type { User } from '@prisma/client';

import { RequiresAuth } from '@/decorators/auth/auth.decorator';
import { AuthenticatedUser } from '@/decorators/user/user.decorator';

import { GuildsService } from './guilds.service';
import { CreateGuildDto } from './dto/create-guild.dto';
import { UpdateGuildDto } from './dto/update-guild.dto';
import { GuildEntity } from './entities/guild.entity';

@RequiresAuth()
@UseInterceptors(ClassSerializerInterceptor)
@Controller('api/guilds')
export class GuildsController {
  constructor(private readonly guildsService: GuildsService) {}

  @Post()
  async create(
    @AuthenticatedUser() user: User,
    @Body() createGuildDto: CreateGuildDto,
  ) {
    return new GuildEntity(
      await this.guildsService.create({ user, createGuildDto }),
    );
  }

  @ApiQuery({
    name: 'page',
    type: Number,
    description: 'The page to retrieve. The default is 0.',
    required: false,
  })
  @ApiQuery({
    name: 'limit',
    type: Number,
    description:
      'The number of results to return. By default, 10 results are returned per page.',
    required: false,
  })
  @Get()
  async findAll(@Query('page') page?: string, @Query('limit') limit?: string) {
    const { data, ...cursor } = await this.guildsService.findAll({
      page: Math.min(+(page || 0), 0),
      limit: Math.min(Math.max(+(limit || 10), 1), 20),
    });
    return { ...cursor, data: data.map((guild) => new GuildEntity(guild)) };
  }

  @Get(':slug')
  async findOne(@Param('slug') slug: string) {
    const guild = await this.guildsService.findOneBySlug(slug);

    if (!guild) {
      throw new NotFoundException();
    }

    return new GuildEntity(guild);
  }

  @Get('availability/:slug')
  async checkSlugAvailability(
    @Param('slug') slug: string,
  ): Promise<{ available: boolean }> {
    return await this.guildsService.checkSlugAvailability(slug);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGuildDto: UpdateGuildDto) {
    return this.guildsService.update(+id, updateGuildDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.guildsService.remove(+id);
  }
}
