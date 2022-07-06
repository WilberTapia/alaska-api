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
import { objetivoDistDTO } from './objetivoDist.dto';
import { Obj_Dist_Periodo } from './objetivoDist.entity';
import { objetivoDistService } from './objetivoDist.services';

@ApiTags('objetivoDist')
@Controller('objetivoDist')
export class objetivoDistController {
  constructor(private objetivoDistService: objetivoDistService) {}

  @Get()
  // @ApiResponse({ status: 201, type: [Obj_Dist_Periodo] })
  index() {
    return this.objetivoDistService.getAll();
  }

  // @Post()
  // create(@Body() data: objetivoDistDTO) {
  //   return this.objetivoDistService.create(data);
  // }

  // @Get('/:id')
  // // @ApiResponse({ status: 201, type: Obj_Dist_Periodo })
  // show(@Param('id') id: number) {
  //   return this.objetivoDistService.get(id);
  // }

  // @Put('/:id')
  // update(@Param('id') id: number, @Body() data: objetivoDistDTO) {
  //   return this.objetivoDistService.update(id, data);
  // }

  // @Delete('/:id')
  // destroy(@Param('id') id: number) {
  //   return this.objetivoDistService.delete(id);
  // }
}
