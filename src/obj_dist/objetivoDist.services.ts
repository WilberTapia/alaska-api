import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository, Not, FindOneOptions } from 'typeorm';
import { objetivoDistDTO } from './objetivoDist.dto';
import { Obj_Dist_Periodo } from './objetivoDist.models';

@Injectable()
export class objetivoDistService {
  constructor(
   @InjectModel(Obj_Dist_Periodo)
   private odpModel: typeof Obj_Dist_Periodo
  ) {}
  
  async getAll() {
    const users = await this.odpModel.sequelize.query("SELECT * FROM Obj_Dist_Periodo")
    return users[0];
  }
  
  async get(id: number) {
    const user = await this.odpModel.sequelize.query(`SELECT * FROM Obj_Dist_Periodo WHERE ID=${id}`)
    // const user = await this.odpModel.findOne({where: {id}});
    return user[0];
  }

   
  async getPRCLEVEL(id: number) {
    const user = await this.odpModel.sequelize.query(`SELECT DISTINCT PRCLEVEL FROM Obj_Dist_Periodo WHERE CUSTNMBR=${id}`)
    // const user = await this.odpModel.findOne({where: {id}});
    return user[0];
  }
  
  async create(data: objetivoDistDTO) {
    const users = await this.odpModel.sequelize.query(`INSERT INTO Obj_Dist_Periodo (CUSTNMBR, MES, OBJETIVO, PRCLEVEL, PRECIO_META, PRECIO_OR, PRODUCTO, YEAR )
    VALUES( ${data.CUSTNMBR}, ${data.MES}, ${data.OBJETIVO}, '${data.PRCLEVEL}',  ${data.PRECIO_META}, ${data.PRECIO_OR}, '${data.PRODUCTO}', ${data.YEAR})`)
    return users;
  }

  async update(id: number, data: objetivoDistDTO) {
    const users = await this.odpModel.findOne({where: {id}});
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
