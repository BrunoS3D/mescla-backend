import {
  Controller,
  Get,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('api')
export class ApiController {
  @Get('status')
  getStatus() {
    return { message: 'hello, world!', ok: true };
  }
}
