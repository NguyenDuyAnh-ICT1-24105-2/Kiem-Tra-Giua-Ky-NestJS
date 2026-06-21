import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { DocGiaService } from './doc-gia.service';
import { DocGia } from './doc-gia.entity';

@Controller('doc-gia')
export class DocGiaController {
  constructor(private readonly docGiaService: DocGiaService) {}

  @Post()
  create(@Body() data: Partial<DocGia>) {
    return this.docGiaService.create(data);
  }

  @Get()
  findAll() {
    return this.docGiaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.docGiaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<DocGia>) {
    return this.docGiaService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.docGiaService.remove(id);
  }
}
