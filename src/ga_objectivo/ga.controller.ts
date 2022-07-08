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
import { gaDTO } from './ga.dto';
import { Objectivo_GA_Producto_Periodo } from './ga.models';
import { gaService } from './ga.services';

@ApiTags('Objectivo_GA_Producto_Periodo')
@Controller('Objectivo_GA_Producto_Periodo')
export class gaController {
  constructor(private instanceService: gaService) {}

  @Get()
  @ApiResponse({ status: 201, type: [Objectivo_GA_Producto_Periodo] })
  index() {
    return this.instanceService.getAll();
  }

  @Get('/:id')
  @ApiResponse({ status: 201, type: Objectivo_GA_Producto_Periodo })
  show(@Param('id') id: number) {
    return this.instanceService.get(id);
  }


  @Post()
  create(@Body() data: gaDTO) {
    return this.instanceService.create(data);
  }


  @Put('/:id')
  update(@Param('id') id: number, @Body() data: gaDTO) {
    return this.instanceService.update(id, data);
  }

  // @Delete('/:id')
  // destroy(@Param('id') id: number) {
  //   return this.objetivoDistService.delete(id);
  // }
}
