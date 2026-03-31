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

    ) {}

    async registerUser(dto: GoogleAuthDto) {
        return this.dataSource.transaction(async (manager) => {
            const userRepository = manager.getRepository(User);

            const { email, firebase_id, fullname } = dto;

            const existingUser = await userRepository.findOne({
                where: { firebase_id },
            });

            if (existingUser) {
                return {
                    message: 'login successfully',
                    user: existingUser,
                };
            }

            const newUser = userRepository.create({
                firebase_id,
                email,
                fullName:fullname
            });

            const savedUser = await userRepository.save(newUser);
            const token = await this.jwtService.signAsync(savedUser);

            return {
                message: 'user register successfully',
                user: savedUser,
                token
            };
        });
    }
}