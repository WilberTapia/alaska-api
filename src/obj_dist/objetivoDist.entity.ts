import {
  ManyToOne,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({schema:'DBO', name:"Obj_Dist_Periodo", synchronize: true})
export class Obj_Dist_Periodo {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;
  
  @ApiProperty()
  @Column()
  CUSTNMBR: string;
  
  @ApiProperty()
  @Column()
  OBJETIVO: string;
  
  @ApiProperty()
  @Column()
  MES: string;
  
  @ApiProperty()
  @Column()
  YEAR: string;
  
  @ApiProperty()
  @Column()
  PRODUCTO: string;
  
  @ApiProperty()
  @Column()
  PRCLEVEL: string;
  
  @ApiProperty()
  @Column()
  PRECIO_OR: string;
  
  @ApiProperty()
  @Column()
  PRECIO_META: string;
 
  // @ApiProperty()
  // @CreateDateColumn()
  // createdAt: string;

  // @ApiProperty()
  // @UpdateDateColumn()
  // updatedAt: string;
}
