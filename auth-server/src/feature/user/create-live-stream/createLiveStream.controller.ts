// import { HttpException, Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { User } from '../../../domain/entities/user.entity';
// import { Repository } from 'typeorm';


// @Injectable()
// export class CreateLiveStreamService {

//     constructor(
//         @InjectRepository(User) private userRepository: Repository<User>,
//     ) { }

//     async liveStream(id: string, user: any) {
//         const user_Id = user.id
//         const userInfo = await this.userRepository.findOne({ where: { id: user_Id } })
//         if (!userInfo) {
//             throw new HttpException('user not found',404)
//         }

//     }
// }
