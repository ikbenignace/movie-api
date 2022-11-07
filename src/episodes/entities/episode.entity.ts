import { ApiProperty } from "@nestjs/swagger";
import { Episode } from "@prisma/client";

export class EpisodeEntity implements Episode {
    @ApiProperty()
    id: number;
    @ApiProperty()
    name: string;
    @ApiProperty()
    numeration: number;
    @ApiProperty()
    showId: number;
    @ApiProperty()
    season: number;
}
