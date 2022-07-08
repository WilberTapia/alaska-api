import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository, Not, FindOneOptions } from 'typeorm';
import { pvpDTO } from './pvp.dto';
import { Proyeccion_Ventas_Periodo } from './pvp.models';

@Injectable()
export class pvpService {
  constructor(
   @InjectModel(Proyeccion_Ventas_Periodo)
   private pvpModel: typeof Proyeccion_Ventas_Periodo
  ) {}
  
  async getAll() {
    const users = await this.pvpModel.sequelize.query(`SELECT * FROM Proyeccion_Ventas_Periodo`)
    return users[0];
  }
  
  async get(id: number) {
    const user = await this.pvpModel.sequelize.query(`SELECT * FROM Proyeccion_Ventas_Periodo WHERE ID=${id}`)
    // const user = await this.odpModel.findOne({where: {id}});
    return user[0];
  }

  async create(data: pvpDTO) {
    const users = new Proyeccion_Ventas_Periodo()
    Object.assign(users, data);
    users.save()
    return users;
  }

  async update(id: number, data: pvpDTO) {
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
