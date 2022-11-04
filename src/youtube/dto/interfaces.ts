import { ApiProperty } from "@nestjs/swagger";

export class VideoDetails {
    @ApiProperty()
    videoId: string;
    @ApiProperty()
    title: string;
    @ApiProperty()
    shortDescription: string;
    @ApiProperty()
    lengthSeconds: string;
    @ApiProperty()
    keywords?: string[];
    @ApiProperty()
    channelId: string;
    @ApiProperty()
    isOwnerViewing: boolean;
    @ApiProperty()
    isCrawlable: boolean;
    @ApiProperty()
    thumbnails: thumbnail[];
    @ApiProperty()
    averageRating: number;
    @ApiProperty()
    allowRatings: boolean;
    @ApiProperty()
    viewCount: string;
    @ApiProperty()
    author: string;
    @ApiProperty()
    isPrivate: boolean;
    @ApiProperty()
    isUnpluggedCorpus: boolean;
    @ApiProperty()
    isLiveContent: boolean;

    constructor(partial: Partial<VideoDetails>) {
        Object.assign(this, partial);
    }
  }

export class thumbnail {
    @ApiProperty()
    url: string;
    @ApiProperty()
    width: number;
    @ApiProperty()
    height: number;
  }

export class storyboard {
    @ApiProperty()
    templateUrl: string;
    @ApiProperty()
    thumbnailWidth: number;
    @ApiProperty()
    thumbnailHeight: number;
    @ApiProperty()
    thumbnailCount: number;
    @ApiProperty()
    interval: number;
    @ApiProperty()
    columns: number;
    @ApiProperty()
    rows: number;
    @ApiProperty()
    storyboardCount: number;
  }