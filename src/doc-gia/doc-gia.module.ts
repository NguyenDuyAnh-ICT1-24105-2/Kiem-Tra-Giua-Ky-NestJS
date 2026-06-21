import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocGiaService } from './doc-gia.service';
import { DocGiaController } from './doc-gia.controller';
import { DocGia } from './doc-gia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DocGia])],
  controllers: [DocGiaController],
  providers: [DocGiaService],
})
export class DocGiaModule {}
