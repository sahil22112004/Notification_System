import { Body, Controller, Get, Req, UseGuards } from '@nestjs/common';
import { fetchCreatorService } from './fetchCreator.service';
import { JwtAuthGuard } from '../../../infrastructure/auth-gaurd/authGaurd';

@Controller('fetchAllProfile')
export class fetchCreatorController {
  constructor(private readonly fetchCreatorService: fetchCreatorService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  fetchAllProfile(@Req() req: any){
    return this.fetchCreatorService.fetchCreators(req.user)
  }
}


























