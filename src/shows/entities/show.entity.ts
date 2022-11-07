import { ApiProperty } from "@nestjs/swagger";
import { Show } from "@prisma/client";
import { EpisodeEntity } from "src/episodes/entities/episode.entity";

export class ShowEntity implements Show {
    @ApiProperty()
    id: number;
    @ApiProperty()
    name: string;
    @ApiProperty()
    startYear: number;
    @ApiProperty()
    endYear: number;
}
