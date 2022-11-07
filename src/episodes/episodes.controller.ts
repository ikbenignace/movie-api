import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { CreateEpisodeDto } from './dto/create-episode.dto';
import { UpdateEpisodeDto } from './dto/update-episode.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { EpisodeEntity } from './entities/episode.entity';

@ApiTags('episodes')
@Controller('episodes')
export class EpisodesController {
  constructor(private readonly episodesService: EpisodesService) {}

  @ApiResponse({ type: EpisodeEntity })
  @Post()
  create(@Body() createEpisodeDto: CreateEpisodeDto) {
    return this.episodesService.create(createEpisodeDto);
  }

  @ApiResponse({ type: EpisodeEntity, isArray: true })
  @Get()
  findAll() {
    return this.episodesService.findAll();
  }

  @ApiResponse({ type: EpisodeEntity })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.episodesService.findOne(+id);
  }

  @ApiResponse({ type: EpisodeEntity })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEpisodeDto: UpdateEpisodeDto) {
    return this.episodesService.update(+id, updateEpisodeDto);
  }

  @ApiResponse({ type: EpisodeEntity })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.episodesService.remove(+id);
  }
}
