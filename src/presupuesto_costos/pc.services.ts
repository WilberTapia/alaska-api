import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository, Not, FindOneOptions } from 'typeorm';
import { pcDTO } from './pc.dto';
import { PROYECCION_COSTOS } from './pc.models';

@Injectable()
export class pcService {
  constructor(
   @InjectModel(PROYECCION_COSTOS)
   private pvpModel: typeof PROYECCION_COSTOS
  ) {}
  
  async getAll() {
    const users = await this.pvpModel.sequelize.query(`SELECT * FROM PROYECCION_COSTOS`)
    return users[0];
  }
  
  async get(id: number) {
    const user = await this.pvpModel.sequelize.query(`SELECT * FROM PROYECCION_COSTOS WHERE ID=${id}`)
    // const user = await this.odpModel.findOne({where: {id}});
    return user[0];
  }

  async create(data: pcDTO) {
    const users = new PROYECCION_COSTOS()
    Object.assign(users, data);
    users.save()
    return users;
  }

  async update(id: number, data: pcDTO) {
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
