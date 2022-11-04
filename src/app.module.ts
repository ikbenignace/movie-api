import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { YoutubeModule } from './youtube/youtube.module';

@Module({
  imports: [YoutubeModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
