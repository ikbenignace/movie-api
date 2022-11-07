import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateShowDto } from './dto/create-show.dto';
import { UpdateShowDto } from './dto/update-show.dto';

@Injectable()
export class ShowsService {
  constructor(private prisma: PrismaService) {}

  create(createShowDto: CreateShowDto) {
    return this.prisma.show.create({
      data: {
        name: createShowDto.name,
        startYear: createShowDto.startYear,
        endYear: createShowDto.endYear,
      },
    });
  }

  findAll() {
    return this.prisma.show.findMany();
  }

  findOne(id: number) {
    return this.prisma.show.findUnique({
      where: {
        id,
      },
      include: {
        episodes: true,
      },
    });
  }

  update(id: number, updateShowDto: UpdateShowDto) {
    return this.prisma.show.update({
      where: {
        id,
      },
      data: {
        name: updateShowDto.name || undefined,
        startYear: updateShowDto.startYear || undefined,
        endYear: updateShowDto.endYear || undefined,
      },
    });
  }

  remove(id: number) {
    return this.prisma.show.delete({
      where: {
        id,
      },
    });
  }
}
