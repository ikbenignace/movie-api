import { HttpException, HttpStatus, Injectable, StreamableFile } from '@nestjs/common';
import * as ytdl from 'ytdl-core';
import { VideoDetails } from './dto/interfaces';

@Injectable()
export class YoutubeService {
  async getInfo(url: string) {
    let details = await ytdl.getBasicInfo(url).catch(() => {});
    if(details) return new VideoDetails(details.player_response.videoDetails)
    throw new HttpException("YouTube video not found", HttpStatus.NOT_FOUND)
  }

  async getStream(url: string) {
    let result = await this.getInfo(url)
    if(result) {
      let file = await ytdl(url);
      return new StreamableFile(file);
    }
    throw new HttpException("YouTube video not found", HttpStatus.NOT_FOUND)
  }
}
