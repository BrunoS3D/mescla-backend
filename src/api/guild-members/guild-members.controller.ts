import {
  Controller,
  Get,
  // Post,
  // Body,
  // Patch,
  Param,
  // Delete,
} from '@nestjs/common';

import { GuildMembersService } from './guild-members.service';
// import { CreateGuildMemberDto } from './dto/create-guild-member.dto';
// import { UpdateGuildMemberDto } from './dto/update-guild-member.dto';

@Controller('api/guilds')
export class GuildMembersController {
  constructor(private readonly guildMembersService: GuildMembersService) {}

  // @Post(':guildId/members')
  // create(@Body() createGuildMemberDto: CreateGuildMemberDto) {
  //   return this.guildMembersService.create(createGuildMemberDto);
  // }

  // @Get()
  // findAll() {
  //   return this.guildMembersService.findAll();
  // }

  @Get(':guildId/members/:userId')
  findOne(@Param('guildId') guildId: string, @Param('userId') userId: string) {
    return this.guildMembersService.findOne(+guildId, +userId);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateGuildMemberDto: UpdateGuildMemberDto,
  // ) {
  //   return this.guildMembersService.update(+id, updateGuildMemberDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.guildMembersService.remove(+id);
  // }
}
