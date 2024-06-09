import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // code running app module
  await app.listen(3000);
}
bootstrap(); // js calling this function
