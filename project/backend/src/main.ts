import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS cho Frontend
  app.enableCors({
    origin: true,
    credentials: true,
  });

  // Middleware parse application/x-www-form-urlencoded cho TTLock Callback Webhook
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  // Pipeline Validation tự động transform DTO
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`🚀 Homestay Backend Application is running on: http://localhost:${port}`);
}

bootstrap();
