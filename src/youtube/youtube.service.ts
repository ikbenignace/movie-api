import { HttpException, HttpStatus, Injectable, StreamableFile } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as ytdl from 'ytdl-core';
import { VideoDetails } from './dto/interfaces';

@Injectable()
export class YoutubeService {
  constructor(private prisma: PrismaService) {}
  
  async getInfo(url: string) {
    let details = await ytdl.getBasicInfo(url).catch(() => {});
    if(details) {
      let exists = await this.prisma.download.findUnique({where: {
        videoId: details.player_response.videoDetails.videoId
      }})
      if(!exists) {
        await this.prisma.download.create({
          data: {
            videoId: details.player_response.videoDetails.videoId,
            timesDownloaded: 0
          }
        })
      }
      return new VideoDetails(details.player_response.videoDetails)
    }
    throw new HttpException("YouTube video not found", HttpStatus.NOT_FOUND)
  }

  async getStream(url: string) {
    let result = await this.getInfo(url)
    if(result) {
      let file = await ytdl(url);
      await this.prisma.download.update({
        where: { videoId: result.videoId },
        data: { timesDownloaded: { increment: 1 } }
      })
      return new StreamableFile(file);
    }
    throw new HttpException("YouTube video not found", HttpStatus.NOT_FOUND)
  }

  getStats() {
    return this.prisma.download.findMany()
  }
}
