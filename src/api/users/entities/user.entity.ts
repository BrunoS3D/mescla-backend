import { Exclude } from 'class-transformer';

import { AuthProviders } from '@prisma/client';

export class UserEntity {
  id!: number;

  username!: string;

  displayName!: string | null;

  email!: string | null;

  @Exclude()
  password!: string | null;

  avatarUrl!: string | null;

  authProvider!: AuthProviders;

  thirdPartyId!: string | null;

  pubref!: string;

  @Exclude()
  lastLoginAt!: Date | null;

  @Exclude()
  createdAt!: Date;

  @Exclude()
  updatedAt!: Date;

  @Exclude()
  deletedAt!: Date | null;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
