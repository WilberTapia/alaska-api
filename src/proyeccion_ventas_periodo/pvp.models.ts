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

@Table({modelName:'Proyeccion_Ventas_Periodo', tableName:'Proyeccion_Ventas_Periodo', updatedAt:false, createdAt: false, schema: 'dbo'})
export class Proyeccion_Ventas_Periodo extends Model {
  
  @ApiProperty()
  @PrimaryKey
  @Column
  id?: number;
  
  @ApiProperty()
  @Column
  CODIGO: string;

  @ApiProperty()
  @Column
  DESCRIPCION: string;

  @ApiProperty()
  @Column
  CANTIDAD: string;

  @ApiProperty()
  @Column
  MONTO: string;

  @ApiProperty()
  @Column
  PRECIO_P: string;

  @ApiProperty()
  @Column
  LOCALIDAD: string;

  @ApiProperty()
  @Column
  ANO: string;

  @ApiProperty()
  @Column
  MES_Periodo: string;

  @ApiProperty()
  @Column
  DIA: string;

}
