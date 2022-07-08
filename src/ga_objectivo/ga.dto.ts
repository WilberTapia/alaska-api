import { ApiProperty } from '@nestjs/swagger';

export class gaDTO {
  @ApiProperty()
  id?: number;
  
  @ApiProperty()
  GA: string;

  @ApiProperty()
  Producto: string;

  @ApiProperty()
  monto: string;

  @ApiProperty()
  ano: string;

  @ApiProperty()
  mes_periodo: string;
}
