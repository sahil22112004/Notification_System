import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { GoogleAuthDto } from '../../../domain/dto/googleUser.dto';
import { User } from '../../../domain/entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class GoogleLoginService {
    constructor(
        private dataSource: DataSource,
        private readonly jwtService: JwtService,

    ) { }

    async registerUser(dto: GoogleAuthDto) {
        return this.dataSource.transaction(async (manager) => {
            const userRepository = manager.getRepository(User);

            const { email, firebase_id, fullname } = dto;

            const existingUser = await userRepository.findOne({
                where: { email },
            });


            if (existingUser) {
                const payload = {
                    id: existingUser.id,
                    firebase_id: existingUser.firebase_id,
                    email: existingUser.email,
                    fullname: existingUser.fullName

                }
                const token = await this.jwtService.signAsync(payload);
                return {
                    message: 'login successfully',
                    user: existingUser,
                    token

                };
            }

            const newUser = userRepository.create({
                firebase_id,
                email,
                fullName: fullname
            });

            const savedUser = await userRepository.save(newUser);
            const payload = {
                id: savedUser.id,
                firebase_id: savedUser.firebase_id,
                email: savedUser.email,
                fullname: savedUser.fullName
            }
            const token = await this.jwtService.signAsync(payload);

            return {
                message: 'user register successfully',
                user: savedUser,
                token
            };
        });
    }
}