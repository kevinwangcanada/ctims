import {Controller, Get, Post, Body, Patch, Param, Delete, HttpCode} from '@nestjs/common';
import { CtmlJsonService } from './ctml-json.service';
import { CreateCtmlJsonDto } from './dto/create-ctml-json.dto';
import { UpdateCtmlJsonDto } from './dto/update-ctml-json.dto';

@Controller('ctml-json')
export class CtmlJsonController {
  constructor(private readonly ctmlJsonService: CtmlJsonService) {}

  @Post()
  create(@Body() createCtmlJsonDto: CreateCtmlJsonDto) {
    return this.ctmlJsonService.create(createCtmlJsonDto);
  }

  @Get('all')
  findAll() {
    return this.ctmlJsonService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const entities = await this.ctmlJsonService.findOne(+id)
    return entities;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCtmlJsonDto: UpdateCtmlJsonDto) {
    return this.ctmlJsonService.update(+id, updateCtmlJsonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ctmlJsonService.remove(+id);
  }
}
