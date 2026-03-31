import { Body, Controller, Post, Res } from '@nestjs/common';
import { GoogleLoginService } from './google-login.service';
import { GoogleAuthDto } from '../../../domain/dto/googleUser.dto';
import type { Response } from 'express';

@Controller('google-login')
export class GoogleLoginController {
  constructor(private readonly googleLoginService: GoogleLoginService) {}

  @Post()
  async registerUser(
    @Body() dto: GoogleAuthDto,
    @Res({ passthrough: true }) res: Response
  ) {
    const response = await this.googleLoginService.registerUser(dto);

    if (response.token) {
      res.cookie('token', response.token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60,
      });
    }

    return response;
  }
}