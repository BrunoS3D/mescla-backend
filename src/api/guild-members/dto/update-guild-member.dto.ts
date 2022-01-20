import { PartialType } from '@nestjs/swagger';
import { CreateGuildMemberDto } from './create-guild-member.dto';

export class UpdateGuildMemberDto extends PartialType(CreateGuildMemberDto) {}
