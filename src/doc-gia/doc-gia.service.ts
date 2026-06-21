import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DocGia } from './doc-gia.entity';

@Injectable()
export class DocGiaService {
  constructor(
    @InjectRepository(DocGia)
    private readonly docGiaRepository: Repository<DocGia>,
  ) {}

  async create(data: Partial<DocGia>): Promise<DocGia> {
    const newDocGia = this.docGiaRepository.create({
      ...data,
      ngayDangKy: new Date(),
    });
    return await this.docGiaRepository.save(newDocGia);
  }

 
  async findAll(): Promise<DocGia[]> {
    return await this.docGiaRepository.find();
  }

  
  async findOne(id: number): Promise<DocGia> {
    const docGia = await this.docGiaRepository.findOneBy({ id });
    if (!docGia) {
      throw new NotFoundException(`Không tìm thấy độc giả có ID = ${id}`);
    }
    return docGia;
  }

  
  async update(id: number, data: Partial<DocGia>): Promise<DocGia> {
    const docGia = await this.findOne(id);
    const updatedDocGia = Object.assign(docGia, data);
    return await this.docGiaRepository.save(updatedDocGia);
  }

  
  async remove(id: number): Promise<{ message: string }> {
    const docGia = await this.findOne(id);
    await this.docGiaRepository.remove(docGia);
    return { message: `Xóa thành công độc giả có ID = ${id}` };
  }
}
