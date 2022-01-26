import {
  Controller,
  Get,
  // Post,
  // Body,
  // Patch,
  Param,
  // Delete,
} from '@nestjs/common';
import { GuildRoles } from '@prisma/client';

import { GuildInvitesService } from './guild-invites.service';
// import { CreateGuildInviteDto } from './dto/create-guild-invite.dto';
// import { UpdateGuildInviteDto } from './dto/update-guild-invite.dto';

import { RequireGuildRoles } from '@/decorators/guild-roles/guild-roles.decorator';

@Controller('api/guilds')
export class GuildInvitesController {
  constructor(private readonly guildInvitesService: GuildInvitesService) {}

  // @Post('/:id/invites')
  // create(@Body() createGuildInviteDto: CreateGuildInviteDto) {
  //   return this.guildInvitesService.create(createGuildInviteDto);
  // }

  @RequireGuildRoles(GuildRoles.manager)
  @Get(':guildId/invites')
  findAll(@Param('id') guildId: string) {
    return this.guildInvitesService.findAll(+guildId);
  }

  @RequireGuildRoles(GuildRoles.manager)
  @Get('invites/:id')
  findOne(@Param('id') id: string) {
    return this.guildInvitesService.findOneByCode(id);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateGuildInviteDto: UpdateGuildInviteDto,
  // ) {
  //   return this.guildInvitesService.update(+id, updateGuildInviteDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.guildInvitesService.remove(+id);
  // }
}
