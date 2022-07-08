import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { pvpDTO } from './pvp.dto';
import { Proyeccion_Ventas_Periodo } from './pvp.models';
import { pvpService } from './pvp.services';

@ApiTags('Proyeccion_Ventas_Periodo')
@Controller('Proyeccion_Ventas_Periodo')
export class pvpController {
  constructor(private objetivoDistService: pvpService) {}

  @Get()
  @ApiResponse({ status: 201, type: [Proyeccion_Ventas_Periodo] })
  index() {
    return this.objetivoDistService.getAll();
  }

  @Get('/:id')
  @ApiResponse({ status: 201, type: Proyeccion_Ventas_Periodo })
  show(@Param('id') id: number) {
    return this.objetivoDistService.get(id);
  }


  @Post()
  create(@Body() data: pvpDTO) {
    return this.objetivoDistService.create(data);
  }


  @Put('/:id')
  update(@Param('id') id: number, @Body() data: pvpDTO) {
    return this.objetivoDistService.update(id, data);
  }

  // @Delete('/:id')
  // destroy(@Param('id') id: number) {
  //   return this.objetivoDistService.delete(id);
  // }
}
