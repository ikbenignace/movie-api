import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateShowDto } from './create-show.dto';

export class UpdateShowDto extends PartialType(CreateShowDto) {
    @ApiProperty()
    name: string;
    @ApiProperty()
    startYear: number;
    @ApiProperty()
    endYear: number;
}
