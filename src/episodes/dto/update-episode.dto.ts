import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateEpisodeDto } from './create-episode.dto';

export class UpdateEpisodeDto extends PartialType(CreateEpisodeDto) {
    @ApiProperty()
    name: string
    @ApiProperty()
    showId: number
    @ApiProperty()
    numeration: number
    @ApiProperty()
    season: number;
}
