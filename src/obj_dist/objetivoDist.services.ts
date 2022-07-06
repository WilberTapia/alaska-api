import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Not, FindOneOptions } from 'typeorm';
import { objetivoDistDTO } from './objetivoDist.dto';
import { Obj_Dist_Periodo } from './objetivoDist.entity';

@Injectable()
export class objetivoDistService {
  constructor(
    @InjectRepository(Obj_Dist_Periodo)
    private directivaRepository: Repository<Obj_Dist_Periodo>,
  ) {}
  
  async getAll() {
    const users = await this.directivaRepository.find();
    return users;
  }
  
  // async create(data: objetivoDistDTO) {
  //   const sociedades = new Obj_Dist_Periodo();
  //   Object.assign(sociedades, data);
  //   await this.directivaRepository.save(sociedades);
  //   return sociedades;
  // }

  // async get(id: number) {
  //   const user = await this.directivaRepository.findOne({where: {id}});
  //   return user;
  // }

  // async update(id: number, data: objetivoDistDTO) {
  //   const users = await this.directivaRepository.findOne({where: {id}});
  //   Object.assign(users, data);
  //   await this.directivaRepository.save(users);
  //   return users;
  // }

  // async delete(id: number) {
  //   const user = await this.directivaRepository.findOne({
  //     where: { id },
  //   });
  //   return await this.directivaRepository.remove(user);
  // }
}
