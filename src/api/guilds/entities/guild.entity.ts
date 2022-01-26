import { Exclude } from 'class-transformer';

export class GuildEntity {
  id!: number;

  slug!: string;

  name!: string;

  description!: string;

  @Exclude()
  createdAt!: Date;

  @Exclude()
  updatedAt!: Date;

  @Exclude()
  deletedAt!: Date | null;

  constructor(partial: Partial<GuildEntity>) {
    Object.assign(this, partial);
  }
}
