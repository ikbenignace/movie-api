import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShowsService } from './shows.service';
import { CreateShowDto } from './dto/create-show.dto';
import { UpdateShowDto } from './dto/update-show.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ShowEntity } from './entities/show.entity';

@ApiTags('shows')
@Controller('shows')
export class ShowsController {
  constructor(private readonly showsService: ShowsService) {}

  @ApiResponse({ type: CreateShowDto })
  @Post()
  create(@Body() createShowDto: CreateShowDto) {
    return this.showsService.create(createShowDto);
  }

  @ApiResponse({ type: ShowEntity, isArray: true })
  @Get()
  findAll() {
    return this.showsService.findAll();
  }

  @ApiResponse({ type: ShowEntity })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.showsService.findOne(+id);
  }

  @ApiResponse({ type: ShowEntity })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShowDto: UpdateShowDto) {
    return this.showsService.update(+id, updateShowDto);
  }

  @ApiResponse({ type: ShowEntity })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.showsService.remove(+id);
  }
}
