import { ApiProperty } from '@nestjs/swagger';

export class objetivoDistDTO {
  @ApiProperty()
  id?: number;

  @ApiProperty()
  nombre: string;

  @ApiProperty()
  cargo: string;

}
