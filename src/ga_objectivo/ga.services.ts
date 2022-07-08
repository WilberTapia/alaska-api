import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository, Not, FindOneOptions } from 'typeorm';
import { gaDTO } from './ga.dto';
import { Objectivo_GA_Producto_Periodo } from './ga.models';

@Injectable()
export class gaService {
  constructor(
   @InjectModel(Objectivo_GA_Producto_Periodo)
   private pvpModel: typeof Objectivo_GA_Producto_Periodo
  ) {}
  
  async getAll() {
    const users = await this.pvpModel.sequelize.query(`SELECT * FROM Objectivo_GA_Producto_Periodo`)
    return users[0];
  }
  
  async get(id: number) {
    const user = await this.pvpModel.sequelize.query(`SELECT * FROM Objectivo_GA_Producto_Periodo WHERE ID=${id}`)
    // const user = await this.odpModel.findOne({where: {id}});
    return user[0];
  }

  async create(data: gaDTO) {
    const users = new Objectivo_GA_Producto_Periodo()
    Object.assign(users, data);
    users.save()
    return users;
  }

  async update(id: number, data: gaDTO) {
    const users = await this.pvpModel.findOne({where: {id}});
    Object.assign(users, data);
    await users.save()
    return users;
  }
 
  // async delete(id: number) {
  //   const user = await this.directivaRepository.findOne({
  //     where: { id },
  //   });
  //   return await this.directivaRepository.remove(user);
  // }
}
