// import {
//   ManyToOne,
//   Entity,
//   PrimaryGeneratedColumn,
//   Column,
//   BaseEntity,
//   CreateDateColumn,
//   UpdateDateColumn,
// } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({modelName:'Obj_Dist_Periodo', tableName:'Obj_Dist_Periodo', updatedAt:false, createdAt: false, schema: 'dbo'})
export class Obj_Dist_Periodo extends Model {
  
  @ApiProperty()
  @PrimaryKey
  @Column
  ID: number;
  
  @ApiProperty()
  @Column
  CUSTNMBR: string;
  
  @ApiProperty()
  @Column
  OBJETIVO: string;
  
  @ApiProperty()
  @Column
  MES: string;
  
  @ApiProperty()
  @Column
  YEAR: string;
  
  @ApiProperty()
  @Column
  PRODUCTO: string;
  
  @ApiProperty()
  @Column
  PRCLEVEL: string;
  
  @ApiProperty()
  @Column
  PRECIO_OR: string;
  
  @ApiProperty()
  @Column
  PRECIO_META: string;

}
