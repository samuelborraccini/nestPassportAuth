import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

export type UserDto = {
  id: number;
  name: string;
  username: string;
  password: string;
};

export type createUserDto = {
  name: string;
  username: string;
  password: string;
};
@Injectable()
export class UsersService {
  constructor(private prismaClient: PrismaService) {}
  async getAllUsers(): Promise<UserDto[] | undefined> {
    const users = this.prismaClient.user.findMany();

    return users;
  }

  async createUser(user: createUserDto): Promise<UserDto | undefined> {
    return this.prismaClient.user.create({
      data: user,
    });
  }

  async findOne(username: string): Promise<UserDto | undefined> {
    return this.prismaClient.user.findFirst({
      where: {
        username: username,
      },
    });
  }
}
