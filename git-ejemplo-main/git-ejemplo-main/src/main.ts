import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import{ValidationPipe} from '@nestjs/common';
import { DocumentBuilder,SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist :true, 
      forbidNonWhitelisted :true,
    }),
  );
  const config =new DocumentBuilder()
    .setTitle('Parcial III Electiva De Profundizacion I')
    .setDescription(' VIII Semetre')
    .addBearerAuth()
    .setVersion('1.0')
    .build();
  const document =SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentacion',app,document);
  await app.listen(3000);
}
bootstrap();
