import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../domain/entities/user.entity';
import { GoogleLoginController } from './google-login/google-login.controller';
import { GoogleLoginService } from './google-login/google-login.service';
import { LogoutUserController } from './logout-user/logoutUser.controller';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [TypeOrmModule.forFeature([User]),
  JwtModule.register({
    secret: process.env.JWT_SECRET || 'secret',
  }),],
  controllers: [GoogleLoginController, LogoutUserController],
  providers: [GoogleLoginService],
})
export class authModule { }