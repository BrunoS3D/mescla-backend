import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Strategy } from 'passport-github2';

import config from '@/config';
import { GitHubProfile } from '@/types';
import { UsersService } from '@/api/users/users.service';
import { CreateUserDto } from '@/api/users/dto/create-user.dto';
import { AuthProviders } from '@prisma/client';

@Injectable()
export class GitHubStrategy extends PassportStrategy(Strategy, 'github') {
  constructor(private readonly usersService: UsersService) {
    super({
      clientID: config.github.oauth.clientId,
      clientSecret: config.github.oauth.clientSecret,
      callbackURL: `${config.server.hostUrl}/api/auth/github/callback`,
      scope: ['read:user'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: GitHubProfile,
    done: (...params: any) => void,
  ): Promise<void> {
    const thirdPartyId = profile.id;

    try {
      let user = await this.usersService.findOneByProvider(
        AuthProviders.github,
        thirdPartyId,
      );

      const username = profile.username.toLowerCase();

      if (!user) {
        const createUserDto: CreateUserDto = {
          authProvider: AuthProviders.github,
          email: profile._json.email,
          username,
          displayName: profile.displayName,
          avatarUrl: profile.photos[0].value,
          thirdPartyId,
        };

        user = await this.usersService.create(createUserDto);
      }

      done(null, user);
    } catch (error) {
      done(error, false);
    }
  }
}
