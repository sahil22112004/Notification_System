import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User,RoleStatus } from '../../../domain/entities/user.entity';
import { Follow } from '../../../domain/entities/follow.entity';
import { Not, Repository, IsNull } from 'typeorm';

@Injectable()
export class fetchCreatorService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,

        @InjectRepository(Follow)
        private followRepository: Repository<Follow>,
    ) {}

    async fetchCreators(user: any) {

        const profiles = await this.userRepository.find({
            where: { id: Not(user.id),role:RoleStatus.CREATOR }
        });

        const allProfiles = await Promise.all(
            profiles.map(async (profile) => {

                const followerCount = await this.followRepository.count({
                    where: {
                        followToUser: { id: profile.id },
                        deletedAt: IsNull()
                    }
                });

                const isFollowing = await this.followRepository.exist({
                    where: {
                        followByUser: { id: user.uid },
                        followToUser: { id: profile.id },
                        deletedAt: IsNull()
                    }
                })
              

                return {
                    ...profile,
                    followerCount,
                    isFollowing,
                };
            })
        );

        return {
            message: "profiles fetch successfully",
            allProfiles
        };
    }
}