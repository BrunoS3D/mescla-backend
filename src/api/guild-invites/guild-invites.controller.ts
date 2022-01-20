import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GuildInvitesService } from './guild-invites.service';
import { CreateGuildInviteDto } from './dto/create-guild-invite.dto';
import { UpdateGuildInviteDto } from './dto/update-guild-invite.dto';

@Controller('guild-invites')
export class GuildInvitesController {
  constructor(private readonly guildInvitesService: GuildInvitesService) {}

  @Post()
  create(@Body() createGuildInviteDto: CreateGuildInviteDto) {
    return this.guildInvitesService.create(createGuildInviteDto);
  }

  @Get()
  findAll() {
    return this.guildInvitesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.guildInvitesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGuildInviteDto: UpdateGuildInviteDto,
  ) {
    return this.guildInvitesService.update(+id, updateGuildInviteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.guildInvitesService.remove(+id);
  }
}
