import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';
import { Follow } from './follow.entity';
import { LiveStream } from './livestream.entity';

export enum RoleStatus {
    CREATOR = 'CREATOR',
    USER = 'USER',
}

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true })
    firebase_id: string;

    @Column({ unique: true })
    email: string;

    @Column()
    fullName: string;

    @Column({
        type: 'enum',
        enum: RoleStatus,
        default: RoleStatus.USER,
    })
    role: RoleStatus;

    @OneToMany(() => Follow, (follow) => follow.followByUser)
    following: Follow[];

    @OneToMany(() => Follow, (follow) => follow.followToUser)
    followers: Follow[];

    @OneToMany(() => LiveStream, (LiveStream) => LiveStream.user_Id)
    liveStreams: LiveStream[];

    @CreateDateColumn()
    createdAt: Date



}