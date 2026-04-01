import { Body, Controller, Param, Post, Req, UseGuards } from '@nestjs/common';
import { FollowService } from './followUser.service';
import { JwtAuthGuard } from '../../../infrastructure/auth-gaurd/authGaurd';


@Controller('follow')
export class FolllowController {
  constructor(private readonly FollowService: FollowService) { }

  @Post(':id')
  @UseGuards(JwtAuthGuard)
  likePost(@Param('id') id: string, @Req() req: any) {
    return this.FollowService.togglefollow(id,req.user)
  }

}
 





















// in this create a two pages one is home page and second is creator page on home page there is three blocks on left bloack there will be user info logo default with first leteer of name and coverimage 
// with aby default color and user name below them and two thing following and follower in middle block there will be list of cards of livestream info with valuer user name and his defalr logo with first letter of his name 
// start time of live sream and stream link than on right block there will be list of notification cards user info on left block should be sticky and if livedtream block
// scrolldown than notification and user info do not scroll down and if notification block scroll down than another two block do not scroll down 
// and on creator page there will be the list of creator cards which info coverimage any default color logo first letter of creator name below than creator name and below then follow button 
// and also at top there is navigation bar such that  when pages change navigation bar do not chnage and in navigation bar there are two filed home and creator and one logougt button make the pages classic and good visual ui
// ui shuc be liek modern web pages of that when user like it and theme should be liek when creator can share there live stream linke and user can see them 
// and on home page where there are three bloacks there backgroung should be same it should not seem like they are different and make light them and do not use inline css tailwind css
// use extrenal  css such that import './css' there will be no inline no tailwind css
// and aslo make this project according to componenet based folder structure



