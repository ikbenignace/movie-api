import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEpisodeDto } from './dto/create-episode.dto';
import { UpdateEpisodeDto } from './dto/update-episode.dto';

@Injectable()
export class EpisodesService {
  constructor(private prisma: PrismaService) {}

  create(createEpisodeDto: CreateEpisodeDto) {
    return this.prisma.episode.create({
      data: {
        name: createEpisodeDto.name,
        numeration: createEpisodeDto.numeration,
        season: createEpisodeDto.season,
        show: {
          connect: {
            id: createEpisodeDto.showId,
          },
        },
      },
    })
  }

  findAll() {
    return this.prisma.episode.findMany();
  }

  findOne(id: number) {
    return this.prisma.episode.findUnique({
      where: {
        id,
      },
      include: {
        show: true,
      },
    });
  }

  update(id: number, updateEpisodeDto: UpdateEpisodeDto) {
    return this.prisma.episode.update({
      where: {
        id,
      },
      data: {
        name: updateEpisodeDto.name || undefined,
        numeration: updateEpisodeDto.numeration || undefined,
        season: updateEpisodeDto.season || undefined,
        show: {
          connect: {
            id: updateEpisodeDto.showId || undefined,
          },
        },
      },
    });
  }

  remove(id: number) {
    return this.prisma.episode.delete({
      where: {
        id,
      },
    });
  }
}
