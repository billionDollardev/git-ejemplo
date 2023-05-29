import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `<center>
              <h2>Parcial 3 Electiva De Profundizacion</h2>
            </center>`;
  }

  getSum(n1: number, n2: number): string {
    const Res = 'Your result is: ' + String(Number(n1) + Number(n2));
    return Res;
  }

  getRes(n1: number, n2: number): string {
    const Res = 'Your result is: ' + String(Number(n1) - Number(n2));
    return Res;
  }

  getMul(n1: number, n2: number): string {
    const Res = 'Your result is: ' + String(Number(n1) * Number(n2));
    return Res;
  }

  getDiv(n1: number, n2: number): string {
    let Res = 'Your result is: ' + String(Number(n1) / Number(n2));
    if (n2 == 0) {
      Res = 'cannot be divided by 0';
    }
    return Res;
  }


}
