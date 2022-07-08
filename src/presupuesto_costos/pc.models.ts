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

@Table({modelName:'PROYECCION_COSTOS', tableName:'PROYECCION_COSTOS', updatedAt:false, createdAt: false, schema: 'dbo'})
export class PROYECCION_COSTOS extends Model {
  
  @ApiProperty()
  @PrimaryKey
  @Column
  id?: number;
  
  @ApiProperty()
  @Column
  LOCALIDAD_P: string;

  @ApiProperty()
  @Column
  GRUPO_P: string;

  @ApiProperty()
  @Column
  CUENTA_P: string;

  @ApiProperty()
  @Column
  PROYECCION: string;

  @ApiProperty()
  @Column
  PERIODO: string;

  @ApiProperty()
  @Column
  ANO: string;
}
