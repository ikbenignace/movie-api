import { ApiProperty } from "@nestjs/swagger";
import { Download } from "@prisma/client";


export class DownloadEntity implements Download {
    @ApiProperty()
    id: number;
    @ApiProperty()
    videoId: string;
    @ApiProperty()
    timesDownloaded: number;
    @ApiProperty()
    createdAt: Date;
    @ApiProperty()
    updatedAt: Date;
}