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

@Table({modelName:'PROYECCION_VENTAS', tableName:'PROYECCION_VENTAS', updatedAt:false, createdAt: false, schema: 'dbo'})
export class PROYECCION_VENTAS extends Model {
  
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
  MES: string;

  @ApiProperty()
  @Column
  DIA: string;

}
