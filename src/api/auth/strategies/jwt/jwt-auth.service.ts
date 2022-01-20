import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthProviders, User } from '@prisma/client';

export type JwtPayload = {
  userId: number;
  thirdPartyId?: string;
  authProvider: AuthProviders;
};

@Injectable()
export class JwtAuthService {
  constructor(private readonly jwtService: JwtService) {}

  login(user: User) {
    const payload: JwtPayload = {
      userId: user.id,
      authProvider: user.authProvider,
    };

    if (!!user.thirdPartyId) {
      payload.thirdPartyId = user.thirdPartyId;
    }

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
