import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './infra/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // config global validation body requests
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}

bootstrap();
