import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication
} from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as morgan from 'morgan';
async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.enableCors({ origin: true });
  app.use(morgan('tiny'));
  const config = new DocumentBuilder()
    .setTitle('VPN Check Tool Desktop Back')
    .setDescription('Desktop Back API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/doc', app, document);

  const port = 8081;
  await app.listen(port, '0.0.0.0', () =>
    console.log(`Desktop backend is listening on port ${port}`),
  );
}
bootstrap();
