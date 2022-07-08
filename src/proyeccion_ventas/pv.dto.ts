import { ApiProperty } from '@nestjs/swagger';

export class pvDTO {
  @ApiProperty()
  id?: number;
  
  @ApiProperty()
  CODIGO: string;

  @ApiProperty()
  DESCRIPCION: string;

  @ApiProperty()
  CANTIDAD: string;

  @ApiProperty()
  MONTO: string;

  @ApiProperty()
  PRECIO_P: string;

  @ApiProperty()
  LOCALIDAD: string;

  @ApiProperty()
  ANO: string;

  @ApiProperty()
  MES_Periodo: string;

  @ApiProperty()
  DIA: string;
}
