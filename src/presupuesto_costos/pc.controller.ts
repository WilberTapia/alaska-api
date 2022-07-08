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
import { pcDTO } from './pc.dto';
import { PROYECCION_COSTOS } from './pc.models';
import { pcService } from './pc.services';

@ApiTags('PROYECCION_COSTOS')
@Controller('PROYECCION_COSTOS')
export class pcController {
  constructor(private instanceService: pcService) {}

  @Get()
  @ApiResponse({ status: 201, type: [PROYECCION_COSTOS] })
  index() {
    return this.instanceService.getAll();
  }

  @Get('/:id')
  @ApiResponse({ status: 201, type: PROYECCION_COSTOS })
  show(@Param('id') id: number) {
    return this.instanceService.get(id);
  }


  @Post()
  create(@Body() data: pcDTO) {
    return this.instanceService.create(data);
  }


  @Put('/:id')
  update(@Param('id') id: number, @Body() data: pcDTO) {
    return this.instanceService.update(id, data);
  }

  // @Delete('/:id')
  // destroy(@Param('id') id: number) {
  //   return this.objetivoDistService.delete(id);
  // }
}
