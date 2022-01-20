import { validateOrReject } from 'class-validator';
import { Injectable, Logger } from '@nestjs/common';
import { AuthProviders, User } from '@prisma/client';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '@/prisma/prisma.service';
import { PasswordService } from '../password/password.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly passwordService: PasswordService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      await validateOrReject(createUserDto);

      if (createUserDto.password) {
        createUserDto.password = await this.passwordService.hashPassword(
          createUserDto.password,
        );
      }

      return await this.prisma.user.create({
        data: createUserDto,
      });
    } catch (error) {
      Logger.error('Promise rejected (validation failed). Errors: ', error);
      throw error;
    }
  }

  async findAll() {
    return `This action returns all users`;
  }

  async findOne(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async findOneByProvider(
    authProvider: AuthProviders,
    thirdPartyId: string,
  ): Promise<User | null> {
    return this.prisma.user.findFirst({
      where: {
        authProvider,
        thirdPartyId,
      },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
