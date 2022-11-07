import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { YoutubeModule } from './youtube/youtube.module';
import { ShowsModule } from './shows/shows.module';
import { EpisodesModule } from './episodes/episodes.module';

@Module({
  imports: [YoutubeModule, ShowsModule, EpisodesModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
