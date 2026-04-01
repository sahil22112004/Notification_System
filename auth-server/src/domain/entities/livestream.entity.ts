import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, DeleteDateColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('liveStreams') 
export class LiveStream {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => User, (user) => user.following, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_Id' })
    user_Id: User;

    @Column()
    url: string;

    @Column()
    start_Time: Date;

    @CreateDateColumn()
    createdAt: Date;
}
