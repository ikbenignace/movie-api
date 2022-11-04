import { Controller, Get, Post, Body, Patch, Param, Delete, StreamableFile, Res, HttpStatus, UseInterceptors, HttpException } from '@nestjs/common';
import { YoutubeService } from './youtube.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Youtube } from './entities/youtube.entity';
import { VideoDetails } from './dto/interfaces'

@ApiTags('youtube')
@Controller('youtube')
export class YoutubeController {
  constructor(private readonly youtubeService: YoutubeService) { }

  @Post('download')
  async download(@Body() body: Youtube) {
    return await this.youtubeService.getStream(body.url)
  }

  @Get('download/:url')
  async downloadGet(@Param('url') url: string) {
    return await this.youtubeService.getStream(url)
  }

  @ApiResponse({ type: VideoDetails })
  @Get('info/:url')
  async info(@Param('url') url: string) {
    return await this.youtubeService.getInfo(url)
  }

}
