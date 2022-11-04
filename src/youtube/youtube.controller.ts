import { Controller, Get, Post, Body, Patch, Param, Delete, StreamableFile, Res, HttpStatus, UseInterceptors, HttpException, HostParam, Query } from '@nestjs/common';
import { YoutubeService } from './youtube.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Youtube } from './entities/youtube.entity';
import { VideoDetails } from './dto/interfaces'

@ApiTags('youtube')
@Controller('youtube')
export class YoutubeController {
  constructor(private readonly youtubeService: YoutubeService) { }

  @Get('download')
  async downloadGet(@Query('url') url: string) {
    return await this.youtubeService.getStream(url)
  }

  @ApiResponse({ type: VideoDetails })
  @Get('info')
  async info(@Query('url') url: string) {
    return await this.youtubeService.getInfo(url)
  }

}
