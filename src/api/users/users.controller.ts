import {
  Controller,
  Get,
  // Post,
  // Body,
  // Patch,
  Param,
  // Delete,
  ClassSerializerInterceptor,
  UseInterceptors,
  ParseIntPipe,
} from '@nestjs/common';
import { User } from '@prisma/client';

// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';

import { UsersService } from './users.service';
import { UserEntity } from './entities/user.entity';

import { RequiresAuth } from '@/decorators/auth/auth.decorator';
import { AuthenticatedUser } from '@/decorators/user/user.decorator';

@RequiresAuth()
@UseInterceptors(ClassSerializerInterceptor)
@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Post()
  // async create(@Body() createUserDto: CreateUserDto) {
  //   return this.usersService.create(createUserDto);
  // }

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  @Get('@me')
  async findMyProfile(@AuthenticatedUser() user: User) {
    return new UserEntity(user);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    // return new UserEntity(await this.usersService.findOne(id));
    const result = await this.usersService.findOne(id);
    // console.log(result);
    return result;
  }

  // @Patch(':id')
  // async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // async remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }
}
