import { PartialType } from '@nestjs/swagger';
import { CreateGuildInviteDto } from './create-guild-invite.dto';

export class UpdateGuildInviteDto extends PartialType(CreateGuildInviteDto) {}
