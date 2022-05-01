import { Injectable } from '@nestjs/common';
import { currencies } from './demo-data/currencies';

@Injectable()
export class AppService {
  getAllCurrencies(): any {
    return currencies;
  }
}
