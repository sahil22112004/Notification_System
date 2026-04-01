// import { Body, Controller, Param, Post, Req, UseGuards } from '@nestjs/common';
// import { FollowService } from './followUser.service';
// import { JwtAuthGuard } from '../../../infrastructure/auth-gaurd/authGaurd';


// @Controller('follow')
// export class FolllowController {
//   constructor(private readonly FollowService: FollowService) { }

//   @Post(':id')
//   @UseGuards(JwtAuthGuard)
//   likePost(@Param('id') id: string, @Req() req: any) {
//     return this.FollowService.togglefollow(id,req.user)
//   }

// }