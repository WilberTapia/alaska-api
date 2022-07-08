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

@Table({modelName:'Objectivo_GA_Producto_Periodo', tableName:'Objectivo_GA_Producto_Periodo', updatedAt:false, createdAt: false, schema: 'dbo'})
export class Objectivo_GA_Producto_Periodo extends Model {
  
  @ApiProperty()
  @PrimaryKey
  @Column
  id?: number;
  
  @ApiProperty()
  @Column
  GA: string;

  @ApiProperty()
  @Column
  Producto: string;

  @ApiProperty()
  @Column
  monto: string;

  @ApiProperty()
  @Column
  ano: string;

  @ApiProperty()
  @Column
  mes_periodo: string;
}
