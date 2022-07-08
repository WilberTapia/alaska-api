import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository, Not, FindOneOptions } from 'typeorm';
import { pvDTO } from './pv.dto';
import { PROYECCION_VENTAS } from './pv.models';

@Injectable()
export class pvService {
  constructor(
   @InjectModel(PROYECCION_VENTAS)
   private pvpModel: typeof PROYECCION_VENTAS
  ) {}
  
  async getAll() {
    const users = await this.pvpModel.sequelize.query(`SELECT * FROM PROYECCION_VENTAS`)
    return users[0];
  }
  
  async get(id: number) {
    const user = await this.pvpModel.sequelize.query(`SELECT * FROM PROYECCION_VENTAS WHERE ID=${id}`)
    // const user = await this.odpModel.findOne({where: {id}});
    return user[0];
  }

  async create(data: pvDTO) {
    const users = new PROYECCION_VENTAS()
    Object.assign(users, data);
    users.save()
    return users;
  }

  async update(id: number, data: pvDTO) {
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
