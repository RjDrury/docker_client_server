import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { User } from '@shared/user';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  await app.listen(8000);
}
bootstrap();
