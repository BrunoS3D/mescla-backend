import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GuildMembersService } from './guild-members.service';
import { CreateGuildMemberDto } from './dto/create-guild-member.dto';
import { UpdateGuildMemberDto } from './dto/update-guild-member.dto';

@Controller('guild-members')
export class GuildMembersController {
  constructor(private readonly guildMembersService: GuildMembersService) {}

  @Post()
  create(@Body() createGuildMemberDto: CreateGuildMemberDto) {
    return this.guildMembersService.create(createGuildMemberDto);
  }

  @Get()
  findAll() {
    return this.guildMembersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.guildMembersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGuildMemberDto: UpdateGuildMemberDto) {
    return this.guildMembersService.update(+id, updateGuildMemberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.guildMembersService.remove(+id);
  }
}
