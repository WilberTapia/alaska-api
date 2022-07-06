import { DataSource } from 'typeorm';
import { Obj_Dist_Periodo } from './objetivoDist.entity';

export const odpProvider = [
  {
    provide: 'Obj_Dist_Periodo',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Obj_Dist_Periodo),
    inject: ['DATA_SOURCE'],
  },
];