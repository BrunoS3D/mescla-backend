import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { writeFile } from 'fs';

import * as packageJson from '../package.json';

import config from '@/config';
import { ServerModule } from '@/server.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(ServerModule);

  const docBuilder = new DocumentBuilder()
    .setTitle(packageJson.displayName)
    .setDescription(packageJson.description)
    .setVersion(packageJson.version)
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, docBuilder, {
    operationIdFactory: (controllerKey: string, methodKey: string) => {
      return methodKey;
    },
  });

  writeFile('api_spec.json', JSON.stringify(document, null, 4), () =>
    Logger.verbose('API spec dumped to file', 'Open API'),
  );

  SwaggerModule.setup('api', app, document);

  app.enableCors({
    origin: config.client.url,
    credentials: true,
  });

  app.useGlobalPipes(new ValidationPipe());

  app.use(cookieParser());

  await app.listen(config.server.port);
}
bootstrap();
