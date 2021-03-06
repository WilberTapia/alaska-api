import { ApiProperty } from '@nestjs/swagger';

export class objetivoDistDTO {
  @ApiProperty()
  id?: number;
  
  @ApiProperty()
  CUSTNMBR: string;
  
  @ApiProperty()
  OBJETIVO: string;
  
  @ApiProperty()
  MES: string;
  
  @ApiProperty()
  YEAR: string;
  
  @ApiProperty()
  PRODUCTO: string;
  
  @ApiProperty()
  PRCLEVEL: string;
  
  @ApiProperty()
  PRECIO_OR: string;
  
  @ApiProperty()
  PRECIO_META: string;

}
