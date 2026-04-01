import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../domain/entities/user.entity';
import { fetchCreatorController } from './fetch-creators/fetchCreator.controller';
import { FolllowController } from './follow-user/followUser.controller';
import { fetchCreatorService } from './fetch-creators/fetchCreator.service';
import { FollowService } from './follow-user/followUser.service';
import { JwtModule } from '@nestjs/jwt';
import { Follow } from '../../domain/entities/follow.entity';


@Module({
  imports: [TypeOrmModule.forFeature([User,Follow]),
  JwtModule.register({
    secret: process.env.JWT_SECRET || 'secret',
  }),],
  controllers: [fetchCreatorController, FolllowController],
  providers: [FollowService, fetchCreatorService],
})
export class userModule { }
