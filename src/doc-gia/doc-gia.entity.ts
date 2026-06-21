import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('doc_gia')
export class DocGia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  tenDocGia: string;

  @Column({ type: 'varchar', length: 15, unique: true })
  soDienThoai: string;

  @Column({ type: 'varchar', length: 150, nullable: true })
  email: string;

  @Column({ type: 'date', nullable: true })
  ngayDangKy: Date;

  @Column({ type: 'boolean', default: true })
  trangThai: boolean;
}
