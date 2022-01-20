import { Controller, UseGuards, Get, Res, Req } from '@nestjs/common';

import { JwtAuthService } from '@api/auth/strategies/jwt/jwt-auth.service';
import { GitHubAuthGuard } from '@api/auth/strategies/github/github-auth.guard';
import config from '@/config';
import { Request, Response } from 'express';

@Controller('api/auth/github')
export class GitHubAuthController {
  constructor(private readonly jwtAuthService: JwtAuthService) {}

  @Get()
  @UseGuards(GitHubAuthGuard)
  async githubLogin() {
    // Guard redirects
  }

  @Get('callback')
  @UseGuards(GitHubAuthGuard)
  async githubCallback(@Req() req: Request, @Res() res: Response) {
    const { accessToken } = this.jwtAuthService.login(req.user!);

    if (!accessToken) {
      return res.redirect(`${config.client.url}/login`);
    }

    return res.redirect(
      `${config.client.url}/auth/callback?token=${accessToken}`,
    );
  }
}
