import { Module } from '@nestjs/common';
import { YoutubeService } from './youtube.service';
import { YoutubeController } from './youtube.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [YoutubeController],
  providers: [YoutubeService]
})
export class YoutubeModule {}
