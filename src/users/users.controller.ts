import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UsersService, createUserDto } from './users.service';
import * as Joi from 'joi';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { token } from 'src/auth/jwt.strategy';
const userValidator = Joi.object({
  name: Joi.string().required(),
  username: Joi.string().required(),
  password: Joi.string().required(),
});

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  async getUsers() {
    return this.userService.getAllUsers();
  }

  @Post()
  async createUser(@Body() body: createUserDto) {
    const { error } = userValidator.validate(body);
    if (error) {
      throw new BadRequestException(error.details[0].message);
    }
    const user = this.userService.createUser(body);
    return user;
  }

  @UseGuards(JwtAuthGuard)
  @Get('protected')
  userProtectedRoute(@Req() req: Request & { user: token }) {
    return req.user;
  }
}
