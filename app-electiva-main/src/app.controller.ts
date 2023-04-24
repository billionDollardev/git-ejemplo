import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {

  private readonly sentences = [
    'Hola, ¿cómo estás?',
    'Proyecto electiva ',
    '¿Qué tal tu dia?'
  ];

 
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return `<h2>${this.appService.getHello()}</h2>`;
  }

  @Get('getSum/:n1/:n2')
  getSum(@Param('n1') n1: number, @Param('n2') n2: number): string {
    return `<h2>${this.appService.getSum(n1, n2)}</h2>`;
  }

  @Get('getRes/:n1/:n2')
  getRes(@Param('n1') n1: number, @Param('n2') n2: number): string {
    return `<h2>${this.appService.getRes(n1, n2)}</h2>`;
  }

  @Get('getMul/:n1/:n2')
  getMul(@Param('n1') n1: number, @Param('n2') n2: number): string {
    return `<h2>${this.appService.getMul(n1, n2)}</h2>`;
  }

  @Get('getDiv/:n1/:n2')
  getDiv(@Param('n1') n1: number, @Param('n2') n2: number): string {
    return `<h2>${this.appService.getDiv(n1, n2)}</h2>`;
  }

  @Get('getSentence')
  getGreeting(@Query('language') language: string) {
    let result = '';

    if (language === 'es') {
      const randomIndex = Math.floor(Math.random() * this.sentences.length);
      result = this.sentences[randomIndex];
    }

    return result;
  }
}
