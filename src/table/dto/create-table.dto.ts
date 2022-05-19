import { IsNumber, IsPositive } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTableDto {
  @IsPositive()
  @IsNumber()
  @ApiProperty({
    description: 'O número da mesa',
    example: 1,
  })
  number: number;
}
