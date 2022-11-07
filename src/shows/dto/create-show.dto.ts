import { ApiProperty } from "@nestjs/swagger";

export class CreateShowDto {
    @ApiProperty()
    name: string;
    @ApiProperty()
    startYear: number;
    @ApiProperty()
    endYear: number;
}
