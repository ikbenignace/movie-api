import { ApiProperty } from "@nestjs/swagger";

export class CreateEpisodeDto {
    @ApiProperty()
    name: string
    @ApiProperty()
    showId: number
    @ApiProperty()
    numeration: number
    @ApiProperty()
    season: number;
}
