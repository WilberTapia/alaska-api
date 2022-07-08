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
import { pvDTO } from './pv.dto';
import { PROYECCION_VENTAS } from './pv.models';
import { pvService } from './pv.services';

@ApiTags('PROYECCION_VENTAS')
@Controller('PROYECCION_VENTAS')
export class pvController {
  constructor(private objetivoDistService: pvService) {}

  @Get()
  @ApiResponse({ status: 201, type: [PROYECCION_VENTAS] })
  index() {
    return this.objetivoDistService.getAll();
  }

  @Get('/:id')
  @ApiResponse({ status: 201, type: PROYECCION_VENTAS })
  show(@Param('id') id: number) {
    return this.objetivoDistService.get(id);
  }


  @Post()
  create(@Body() data: pvDTO) {
    return this.objetivoDistService.create(data);
  }


  @Put('/:id')
  update(@Param('id') id: number, @Body() data: pvDTO) {
    return this.objetivoDistService.update(id, data);
  }

  // @Delete('/:id')
  // destroy(@Param('id') id: number) {
  //   return this.objetivoDistService.delete(id);
  // }
}
